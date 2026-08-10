# AINCURU Search Discovery & GEO Report

## Core Philosophy
We do not manipulate search engines. We rely on the core premise that **Entity Clarity > Keyword Stuffing** and **Relevance > Trend Chasing**. We aim to build a strong informational graph across the web that definitively links "AINCURU LLP" to high-quality software engineering and AI automation.

## 1. Brand & Typo Variants
We mapped common misspellings (e.g., AINCUR, AINCURO, AIN CURU) and brand+service associations (e.g., AINCURU AI, AINCURU Product Development) to understand user discovery habits.
- **Rule**: We will *never* create "doorway" pages targeting these typos. Search engines like Google employ auto-correction models that will independently associate these typos to our main canonical domain (`https://www.aincuru.com`) provided our Entity schemas are strong.
- **Internal Search**: To assist users *already* on our platform, our internal search (e.g., Blog Search) automatically maps known typos to their correct semantic values before executing database queries.

## 2. Search Intent Mapping
Pages must target distinct intents:
- `/` -> Brand & overarching positioning
- `/services/ai-systems-automation` -> AI Automation, AI Agents, RAG
- `/company/case-studies` -> Empirical evidence of competence (Case Studies)
- `/portfolio` -> Project gallery

## 3. Trending Topic Strategy
We do not blindly chase trending search keywords (e.g., "quantum computing" or non-relevant news). 
A trending keyword is only pursued if:
1. It is relevant to AINCURU's expertise (e.g., "Generative AI", "RAG", "MCP").
2. We can produce genuinely insightful content.

If those rules are met, content is published primarily via the `/company/blog` or Insights pages.

## 4. GEO (Generative Engine Optimization) Strategy
To surface in LLM-based searches (ChatGPT, Perplexity, Gemini):
- Rely on long-form, factual FAQ content across the site.
- Serve standard `jsonLd` structured data across all static and dynamic routes.
- Rely exclusively on verifiable truth regarding services, tech stacks, and industries. 

## 5. Search Console Strategy
The marketing team should utilize Google Search Console to:
1. Track Impressions vs. CTR for high-value services.
2. Monitor exactly which misspellings are receiving clicks.
3. Discover new natural language queries our users are typing, and feed those into future Blog content.
