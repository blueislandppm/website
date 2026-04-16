# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Blue Island Professional Pool Maintenance** — an SEO-optimized landing page for a pool & spa maintenance business located in Estero, FL. Single-page marketing site built with Next.js App Router.

**Design theme:** Vibrant yellow and blue (sun & water). Uses DaisyUI component library on top of Tailwind CSS.

## Tech Stack
Next.js 16, Tailwind CSS v4, Daisy UI v5

## Styling Approach

- Do not hardcode colors. You MUST use DaisyUI semantic CSS classes: primary, primary-content, secondary, secondary-content, accent, accent-content, neutral, neutral-content, base-100, base-200, base-300, base-content, info, info-content, success, success-content, warning, warning-content, error, error-content
- DaisyUI components are the primary building blocks — ALWAYS use the DaisyUI MCP server to look up component docs before building UI sections
- Use framer-motion for scroll-triggered entry animations (initial + whileInView)
- Be mindful of mobile responsiveness