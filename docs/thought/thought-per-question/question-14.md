---
tags:
  - question-14
title: 14. What does actual testing (usage) of current AI tell about its impact on Humans, including our understanding of its capabilities?
---

# Question-14

!!! note "What these Docs ask"

    What does actual testing (usage) of current AI tell about its impact on Humans, including our understanding of its capabilities?

??? info "What these Docs do not ask"

    Does AI or AI business have the limitations for its growth?


## Understanding AI Capabilities

A lot of public talk on AI Era and future based on it rely on the **assumption** that AI is capable (or will be capable in the observable future) of unimaginable things. Strangely, this assumption can be based on different things:

* The understanding of what this technology **actually is**
* The Sci-Fi **fantasy**-vision

Strangely, while in common case we always expect mixture of different thoughts within the same mind, in this specific situation, the **Fantasy** narrative seems to be aggressively fighting the "direct look at technology". 

So, what is the AI technology if we look at the process of its **development and testing** - what exactly is being developed? What exactly are the goals of this development? How exactly does the testing of produced systems look like? And what does this vision of development and testing process tell us about AI capabilities and limits?

### Complexity and Emergent Abilities

When you input text, the technology brakes it down into **tokens**. Token isn't necessarily a whole word (can be prefixes, suffixes, or even individual characters). Each unique token is assigned a specific ID number from a fixed dictionary. The model looks up each ID in a massive lookup table (Embedding Matrix), each token is replaced by a **vector** (a string of numbers, often 768, 1024, or more, each of numbers representing token's "location" in human meaning, like **dimension 1**: Is it a living thing? (0.98 for "cat", 0.02 for "rock")). Because the technology processes everything in parallel (it doesn't read left-to-right), it needs a way to understand sequence. It applies a mathematical formula (usually sine and cosine functions) to the vectors, which adds a "positional signal" to the data.

These numbers represent the word's "coordinates" in a multi-dimensional map of human language. This map pre-created before your input ("model is trained"): initially, those 768 numbers for every word are completely random. The model is given a massive corpus of text (the internet, books, code). It is tasked with a simple game: "Guess the missing word." Using calculus, the system calculates the "error" between its guess and the reality. It then sends a signal backward through the entire architecture, slightly nudging those 768 numbers for every accurate guess. After trillions of these "guesses," the numbers naturally cluster. The model discovers that whenever the token "X" appears, the token "Y" often follows, but when "Z" appears, "A" also follows. To solve this, the model doesn't just give "bank" one set of numbers; it learns a static embedding (the average meaning) and prepares the **attention mechanism** to shift those numbers based on the surrounding words.

On your input, the attention mechanism calculates how much tokens should "attract" each other based on your specific sentence. The tokens move in 768-dimensional space to form a new, temporary "cluster" that represents the meaning of that specific sentence.

The technology then solves the problem "what is the next most probable token?" and adds that to the sequence, this updates the sequence and the model repeats that again with the new one. The model stops when the next predicted token is EOS (End of Sequence - during its training, the AI read millions of documents. In those documents, there were markers showing where a thought or a document ended. Those markers are put into multi-dimensional map of human language together with other tokens).

**Follow-up questions:**

1. To what degree does the described above make you feel that you **understand** the technology and can predict its output? (answer for yourself)
1. To what degree do the technology developers understand the technology? They know the math, they wrote it: they know exactly how a Dot Product works, how to calculate the gradient to adjust the numbers, know that if you multiply Matrix A by Matrix B, you get Result C. That is all.

**Emergent Abilities**

Developers have no idea what "Dimension #42" actually represents (was created by the model itself during training, 768-dimensional+ map is too complex for a human to audit). What they do see, is that **scaling works**: after scaling, the model develops **Emergent Abilities**. It "learns" how to code in a language it wasn't specifically taught, or it starts solving logic puzzles it previously failed. So the developers **do not "program" new features** like "Logic" or "Translation." They build the architecture, set the mathematical rules, and then let the model "cook" in a sea of data. The properties that emerge are often a surprise even to the people who wrote the code.

### Data (Knowledge) Limits

The language AI models (LLMs) have already read almost everything humans have ever put on the public internet ("Data Wall"). Went through with 4 approaches:

* **The "Common Crawl"**: This is a massive, ongoing harvest of the public web. Every few months, bots crawl billions of pages. "New Data" here includes recent news, new Wikipedia entries, and new Reddit threads. This is how the model stays "current."
* **High-Quality "Dark" Data**: Companies are now paying massive sums for private archives that aren't on the public web (Textbook/Journal deals, Code Repositories, Legal/Medical Records).
* **Synthetic Data (The AI-to-AI Loop)**: Example: Developers ask a strong model to generate 1 million complex Python coding puzzles and their solutions. They then check the solutions for accuracy and feed that "synthetic" data into the new model. **The Risk**: If the first AI has a "hallucination," the second AI learns that error as a "fact."
* **RLHF: Human Feedback**: Thousands of humans sit in rooms comparing two AI answers. They click: "Option A is helpful; Option B is dangerous." This "comparison data" is fed into the model to teach it human values, tone, and safety.

    !!! note "New Jobs in AI Era?"
        AI companies often calls these thousands of places "new jobs generated by AI". Please, think about how long these jobs will be required.

**The "Data Wall" (No New Data)**

For the last decade, AI grew by simply "eating more." But the internet is a finite resource. By late 2025, researchers confirmed that high-quality human text (books, scientific papers, well-written articles) has been exhausted. To find "new" data, developers are forced to look at non-textual sources:

* **Video & Physicality**: Instead of reading about how a door opens, AI is now being trained on millions of hours of YouTube videos and robot sensor data (LiDAR/Radar) to understand the physical world.
* **The "30% Rule"**: Emerging research (Nature, 2024; Wecent, 2026) suggests a model needs a baseline of at least 30% real human-generated data to remain stable. If the "real" portion drops too low, the model's 768-dimensional map begins to warp and shrink.

Model Collapse happens in two stages:

1. **Early Stages**: The model loses "minority" information. It forgets rare languages, niche scientific facts, or unconventional writing styles. It becomes a "Polite Bureaucrat"—technically correct but lacking any depth or "spark.
1. **Late Stages**: The math literally breaks. Because the model is learning from errors made by the previous AI, those errors compound. It starts generating gibberish or repeating the same word over and over.

**The "Inbreeding" Risk (Model Collapse)**

* **The Mechanism:** When an AI is trained on AI-generated text, it loses the "tails" of the distribution—the rare, weird, creative, or highly specific human thoughts.
* **The Result:** The model becomes **"homogenized."** It starts giving very average, safe, and eventually repetitive answers. It loses the "spark" of human nuance because it is essentially mimicking its own average performance.

**How developers are fighting the "Spoil"**

Because developers can't stop scaling (the investors won't let them), they are using several "cleaning" techniques:

| Method | How it works | The "Direct Look" Reality |
| :--- | :--- | :--- |
| **Synthetic Curation** | A "Teacher AI" creates data, and a "Human Grader" verifies it before it's used. | Extremely expensive and slow; replaces "infinite data" with "hand-picked data." |
| **Data Watermarking** | Tagging AI-generated text so future models can ignore it. | Hard to enforce; the internet is already flooded with "invisible" AI spam. |
| **RLHF (Reinforcement)** | Humans explicitly reward the model for not being repetitive. | Can make the model "polite" but doesn't necessarily make it "smarter." |

### Physical (Recourse) Limits

As of April 2026, AI models are hitting a point where each tiny increment of "intelligence" requires a massive, exponential increase in physical resources. The model isn't just "getting smarter"—it’s "getting heavier" in terms of cost, power, and infrastructure.

---

**The Energy Wall (Electricity)**

* **The "Weight" Increase:** Training a frontier model in 2023 (like GPT-4) cost about $78M in compute. In 2024, Llama 3.1 jumped to $170M+. By 2026, training a top-tier model is projected to cost over **$1 Billion** just for the electricity and hardware time.
* **The Physics:** To get a 5% improvement in logic, we often have to double the amount of electricity used. As of 2026, AI data centers are consuming over **2% of global electricity**, with some projections suggesting they will hit **12% by 2028**.

What is the Electricity spent on?

* **The Training Phase (The "Heavy Lift")** This is where the $1 Billion+ costs come from. For months, tens of thousands of GPUs (specialized chips) run at 100% capacity 24/7. Every time the model "guesses" a word and gets it wrong, it has to update billions of parameters. This involves massive matrix multiplications that turn electricity into raw computational work. Training a single "frontier" model in 2026 can consume over 300,000 megawatt-hours—equivalent to the yearly energy use of tens of thousands of homes.
* **The Inference Phase (The "Daily Grind")** While a single query uses a tiny amount of power (roughly enough to light a LED bulb for a few minutes), there are now billions of queries happening every day. In 2026, the combined "Inference" power of all users has surpassed the "Training" power. It is a constant, massive drain on the grid to keep these "mirrors" active.

**The "Physical Inertia" (Hardware Scarcity)**

* **The 5-Year Delay:** While you can write a new AI algorithm in a week, building the transformers, switchgear, and substations to power a new data center now takes **5 years** due to global shortages.
* **The Bottleneck:** We have the chips (the GPUs), but we don't have the "copper and iron" to connect them to the grid. In 2026, nearly half of planned US data center projects are being delayed because the physical world cannot keep up with the digital "acceleration."

**The "Drinking" Water? (The Cooling Problem)**

AI chips are incredibly inefficient at handling heat. About 99% of the electricity going into a GPU is converted directly into waste heat.

* **The Server Room as an Oven:** If you don't remove that heat, the $30,000 chips will literally melt in minutes.
* **The Water Solution:** To remove the heat, data centers use **Evaporative Cooling**.
    1. They circulate water through the racks to absorb heat.
    2. That hot water is sent to "Cooling Towers" where it is sprayed into the air.
    3. The water evaporates, carrying the heat away into the atmosphere.
* **The "Drinking" Metric:** This water must be **fresh and clean** (not saltwater or "gray" water) because minerals and salt would corrode the high-tech pipes and sensors. In 2026, training one large model can **"consume" (evaporate) over 700,000 liters** of pristine freshwater.

**"Green" AI?**

Because of the "Environmental Wall," tech companies in 2026 are taking drastic, almost sci-fi measures to keep growing without destroying the planet:

* **Nuclear Revival**: Google and Microsoft are literally restarting old nuclear power plants (like the Three Mile Island site or Iowa's only nuclear plant) to get carbon-free, 24/7 power.
* **Cold Locations**: New mega-data centers are being built in Finland and the Arctic to use the natural freezing air for cooling, saving millions of gallons of water.
* **Waste Heat Capture**: There are experimental projects in Europe (2026) using the 70°C waste heat from AI servers to purify water or provide heating for entire nearby towns.

**Carbon Footprint**

**The Grid Mix (Operational Emissions)**

This is what you described. An AI data center is plugged into the local electrical grid.

* **The Reality:** Most AI "megaclusters" are so power-hungry that renewable energy (wind/solar) cannot keep up with their constant, 24/7 demand.
* **The Result:** When the sun goes down or the wind stops, the grid ramps up **Natural Gas or Coal plants** to fill the gap. In 2026, tech giants like Microsoft and Meta have actually invested in building their own private natural gas power plants on-site just to ensure their AI doesn't go offline.

**"Embedded" Carbon (The Physical Cost)**

In your physics analogy, this is the "mass" of the particle. Before the AI even answers its first question, it has a massive "carbon debt."

* **Manufacturing:** Making a single $40,000 AI chip (like an NVIDIA H100 or Blackwell) requires ultra-high-temperature furnaces, rare-metal mining, and toxic chemical processing—all of which emit massive amounts of $CO_2$.
* **Construction:** Building a "Gigawatt-scale" data center requires millions of tons of concrete and steel. The production of cement alone is responsible for about **8% of all global $CO_2$ emissions**.

**The "Inference" Accumulation**

While training the model (the birth) is a massive one-time event, the usage (the life) is where the carbon adds up now.

* **The Comparison:** One AI query uses roughly the same amount of electricity as lighting a LED bulb for a few minutes.
* **The Problem:** In 2026, there are trillions of queries happening. When you multiply "a little bit of coal smoke" by 10 billion users a day, the AI industry's total carbon footprint begins to rival that of the **entire aviation industry**.

**"Net Zero" Illusion**

You might hear companies claim they are "Carbon Neutral." In the **"Direct Look,"** this is often a shell game:

1. They emit 1 million tons of carbon by burning gas.
2. They buy a "Certificate" saying they planted trees in a forest (which might have happened anyway).
3. They claim their AI is "Green."

**2026 Reality Check:** Google recently admitted its emissions surged by nearly **50%** in just a few years specifically because of AI. They can't "offset" their way out of physics anymore; the AI is simply consuming more than the planet's green energy transition can provide.

**The "Financial Mass" (Diminishing ROI)**

Investors are starting to feel the "Relativistic effects" of their spending.

* **The ROI Gap:** In 2026, statistics show that while 85% of companies increased their AI spend, less than **1%** report "significant ROI" (gains over 20%).
* **The Cost of "Better":** If you want an AI that is 2x more accurate, it might cost you 10x more in subscription fees or API costs. For most businesses, the "energy" required to reach that extra 0.01% of accuracy isn't worth the money.

### "AI Will Solve the Problems It Creates and Will Do Much More"

Regarding hitting physical limits described above, AI Optimists often say that AI will solve these problems and will also do much beyond this by accelerating development of different technologies (including electricity-producing) or "invest" into speed up of solutions that are already "near" (like fusion energy).

However, here we have a "Time-Lag Paradox": AI consumes resources in **real-time**, but it only provides solutions in **future-time**, so the system "redlines" may collapse before those future solutions arrive.

### Current Conclusions and Open Questions

!!! note

    This may change with time on new data or thought arrival. Also, search for "counter questions" around this Doc (Section, All Docs) for more thought, contemplation and insight.

**Current Conclusions:**

1. We cannot understand the technology (too complex) and so do its developers.
1. AI is **potentially** capable of everything that is attributed to in any "phantasy" scenario (argument: presence of [Emergent Abilities](#complexity-and-emergent-abilities)).
1. AI has technological and physical limits, hits limits, has a chance of never achieving AGI or any progress at all, but also has a chance of contributing into solving/removing these limits.
1. To those limits one more **crucial one** is added - potential [economical collapse](../thought-per-question/question-12.md#full-economics-collapse-scenario).
1. AI desperately needs people and novelty to improve and even not to degrade.

Generally: AI is a representation of healthy (big, consuming) Human Society, it will degrade if Society weakens or collapses.

**Open Questions:**

1. NA

