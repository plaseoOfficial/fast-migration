#!/usr/bin/env bash
#
# upload-assets-to-gcs.sh — WordPress-Mediathek in einen GCS-Bucket spiegeln.
#
# Voraussetzung: gcloud CLI installiert + eingeloggt (siehe Walkthrough), und die
# WordPress-Bilder lokal entpackt (Export-Media-Library-ZIP → Ordner mit der
# uploads-Struktur, z.B. 2025/11/…, 2026/05/…).
#
# Aufruf:
#   ./scripts/upload-assets-to-gcs.sh /pfad/zum/entpackten/uploads
#
# Idempotent: läuft mehrfach, lädt nur Neues/Geändertes (rsync).

set -euo pipefail

# ─── Konfiguration (bei Bedarf anpassen) ──────────────────────────────────────
PROJECT="DEIN_PROJEKT"                       # ← deinen GCP-Projektnamen eintragen
BUCKET="gs://fast-systemmoebel-assets"       # global eindeutig; ggf. Namen ändern
LOCATION="europe-west3"                       # Frankfurt (DSGVO-freundlich)
DEST_PREFIX="images"                          # spiegelt unsere /public/images-Struktur
# ──────────────────────────────────────────────────────────────────────────────

SRC="${1:-}"
if [[ -z "$SRC" || ! -d "$SRC" ]]; then
  echo "Fehler: Quellordner fehlt oder existiert nicht."
  echo "Aufruf: $0 /pfad/zum/entpackten/uploads"
  exit 1
fi

echo "▶ Projekt setzen: $PROJECT"
gcloud config set project "$PROJECT"

# Bucket anlegen, falls noch nicht vorhanden (uniform access).
if ! gcloud storage buckets describe "$BUCKET" >/dev/null 2>&1; then
  echo "▶ Bucket anlegen: $BUCKET ($LOCATION)"
  gcloud storage buckets create "$BUCKET" \
    --location="$LOCATION" \
    --uniform-bucket-level-access
else
  echo "▶ Bucket existiert bereits: $BUCKET"
fi

# Öffentlich lesbar machen (Website-Assets).
echo "▶ Öffentlichen Lesezugriff sicherstellen"
gcloud storage buckets add-iam-policy-binding "$BUCKET" \
  --member=allUsers --role=roles/storage.objectViewer >/dev/null

# Nur Bilddateien spiegeln, Ordnerstruktur erhalten, Langzeit-Cache-Header setzen.
echo "▶ Bilder hochladen (rsync, nur Bildformate) …"
gcloud storage rsync "$SRC" "$BUCKET/$DEST_PREFIX" \
  --recursive \
  --exclude='.*\.(?!(jpg|jpeg|png|webp|gif|svg|avif)$)[^/]*$' \
  --cache-control="public, max-age=31536000, immutable"

echo ""
echo "✅ Fertig. Beispiel-URL:"
echo "   https://storage.googleapis.com/${BUCKET#gs://}/${DEST_PREFIX}/2025/11/DSC_9747.jpg"
echo ""
echo "Nächster Schritt: NEXT_PUBLIC_ASSET_BASE=https://storage.googleapis.com/${BUCKET#gs://}/${DEST_PREFIX}"
