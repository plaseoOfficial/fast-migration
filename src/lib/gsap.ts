"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Central GSAP setup. Importing this module registers the plugins exactly once
 * (registerPlugin is idempotent). Every scroll component imports gsap/ScrollTrigger
 * from here so registration can never be forgotten or duplicated.
 *
 * Marked "use client": GSAP and ScrollTrigger touch the DOM, so they only ever
 * run in the browser bundle.
 */
gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };
