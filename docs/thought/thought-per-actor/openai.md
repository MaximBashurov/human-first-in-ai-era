---
tags:
  - openai
title: OpenAI (LLM)
---

# OpenAI (LLM)

**OpenAI** is an AI research and deployment company best known for **ChatGPT** and the **GPT** family of models. In these Docs it counts as an **actor** in the AI era: an organization through which certain capabilities, limits, and choices reach Humans.

## What Does OpenAI Think About What Their Work Will Do to Other Humans?

### "Benefit for Humanity"

OpenAI presents its mission in **human-facing** terms: building **safe AGI** that **benefits all of humanity**, not a narrow elite. Public messaging often stresses **access** (consumer chat, APIs, lower prices over time) and **alignment** research as guardrails on increasingly capable systems.

> If digital intelligence is created successfully, it could help us elevate humanity by increasing abundance, turbocharging the global economy, and aiding in the discovery of new scientific knowledge.

That framing implies both **upside** (health, education, productivity) and **duty** to manage **misuse** and **concentration of power**—themes OpenAI returns to in system cards, model spec documents, and policy blog posts.

### Competitiveness, Access, and Talking About Risk

OpenAI couples **rapid product iteration** with repeated statements that **frontier models are powerful and risky**—worthy of **graduated deployment**, **red teaming**, and **usage policies**. The company argues that **withholding** capable tools entirely would not remove risk (others would ship less transparently) and that **broad, monitored exposure** feeds safety learning.

??? info "OpenAI's Public Stance on Deployment and Safety"

    - **Iterative deployment:** Release, observe misuse and failure modes, patch—rather than a single “big bang” release of unchecked capability.
    - **Preparedness and evaluation:** Frontier models are tested against categories of catastrophic risk (e.g. CBRN, cyber) before and after release, with mitigation expectations scaled to assessed severity.
    - **Democratic input (aspirational):** OpenAI has experimented with public processes on model behavior—while critics question how much those inputs bind product decisions.

* **Widely Deployed Assistants and Developer APIs**: ChatGPT and the API ecosystem put the same family of models into education, coding, customer support, and creative workflows. OpenAI emphasizes **user controls**, **refusals**, and **content policies**.
* **Productivity Claims and Workforce Framing**: OpenAI-sponsored and third-party studies are often cited to argue that models **raise output** for knowledge workers. The company also acknowledges **displacement** risk and argues for **adaptation**, **reskilling**, and **policy**—without committing to a single blueprint (universal basic income, labor law, etc.).

### New Social Contract via Democratic Process

On April 6, 2026, OpenAI came out with the "[Industrial policy for the Intelligence Age](https://openai.com/index/industrial-policy-for-the-intelligence-age/)" public initiative lead by a corresponding 13-page document. The initiative frames itself as a starting point for a "democratic process rather than a final set of demands".

??? info "Main Stances of the Initiative"

    **Economic Redistribution & "Robot Taxes"**

    OpenAI argues that as AI automates labor, the traditional tax base (payroll taxes) will shrink, potentially bankrupting programs like Social Security.

    * **Public Wealth Fund:** The most prominent proposal is a nationally managed investment fund seeded by AI companies. Similar to Alaska’s Permanent Fund, it would pay regular dividends directly to citizens, giving everyone a financial stake in AI-driven growth.
    * **Tax Reform:** The paper suggests shifting the tax burden away from human labor and toward corporate profits, capital gains, and "automated labor" (essentially a robot tax) to ensure public services remain funded.

    **Labor & Worker Rights**

    OpenAI frames the transition as a "New Deal" for the AI era, focusing on how productivity gains should benefit workers:

    * **32-Hour Workweek:** The blueprint advocates for pilot programs for a 4-day workweek at full pay. The logic is that if AI makes a worker 20% more productive, that gain should be returned as time off rather than just higher profit for the employer.
    * **Adaptive Safety Nets:** It proposes "economic tripwires"—automatic increases in unemployment aid or wage insurance that kick in instantly if AI-driven job displacement hits certain thresholds in a specific region or sector.
    * **Portable Benefits:** Healthcare, retirement, and training benefits should be "decoupled" from specific employers, making it easier for workers to transition between jobs or into "human-centric" fields like education and healthcare.
    
    **Access as a Public Utility**

    The policy argues that AI access should be treated as a fundamental right, similar to literacy or electricity.

    * **"Right to AI":** It calls for government-backed programs to ensure schools, small businesses, and underserved communities have affordable, baseline access to advanced models so the "intelligence gap" doesn't widen.
    * **Infrastructure Expansion:** It urges a massive, public-private partnership to expand the power grid and build data centers, ensuring that energy demands for AI don't drive up costs for regular households.

    **Safety & Containment**

    Beyond economics, the document addresses existential and security risks:

    * **Containment Playbooks:** Coordinated government plans for "recalling" or containing autonomous AI systems that might spread uncontrollably.
    * **Immediate Threats:** Sam Altman specifically highlighted cyberattacks and biological weapons (using AI to engineer novel pathogens) as threats that are "no longer theoretical" and require international institute coordination.

## Is what OpenAI saying in correspondence with what they are actually doing?

### The Three Phases of OpenAI

| Phase | Structure | Financial Goal | Transparency |
| :--- | :--- | :--- | :--- |
| **2015–2018** | **Non-profit** | Pure research ($1B pledged). | High (Open-source weights). |
| **2019–2024** | **Capped-Profit** | Attract investors (Microsoft). | Mixed (API-based access). |
| **2025–Present** | **Public Benefit Corp (PBC)** | Full commercial scale / IPO path. | Low (Proprietary "Closed" AI)[^1]. |

### The 2019 Schism (Anthropic Birth)

In 2019, OpenAI accepted a **$1 billion investment from Microsoft** and transitioned from a pure nonprofit to a "capped-profit" company (this "capped" part died [later](#the-death-of-the-cap-20252026)).

* **The "Industrial Capture" Fear**: A group of senior leaders, led by siblings Dario and Daniela Amodei, feared that OpenAI would become "captured" by Microsoft's commercial interests. They worried that the pressure to ship products (like ChatGPT) would force the company to cut corners on safety.
* **The Mass Exit**: By late 2020, this internal tension became untenable. The Amodeis, along with roughly a dozen top researchers, left OpenAI to start Anthropic in early 2021.

The fundamental disagreement wasn't just about money; it was about how to build AI.

* **OpenAI's Approach**: "Scale first, align later." OpenAI generally believes in building the most powerful model possible and then using "guardrails" (like RLHF—Reinforcement Learning from Human Feedback) to make it behave.
* **Anthropic's Approach**: "Safety by Design." The founders wanted to treat safety as a core part of the training process itself. This led to their signature innovation, Constitutional AI, where the model is given a literal "constitution" of principles to follow while it's learning, rather than being "policed" by humans after the fact.

### The Lies and Power Games (2023 and Many Other Years)

OpenAI was founded as a non-profit and [made its way](#the-three-phases-of-openai) to huge commercial scale over years, but a significant part of understanding this way lies in **how exactly** this way was made.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/bta18wTOr_k?si=_N_DWSkaaVdp16ib" title="This video is a critical investigative essay about Sam Altman and his leadership of OpenAI. It argues that despite Altman's public persona as a responsible steward of AI, there is a consistent pattern of deception and the dismantling of safety safeguards within the company." frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

* **2015–2017: Mission Foundation and Early Doubt**: Internal notes from President Greg Brockman as early as 2017 suggested they were already planning a pivot to a "B Corp" or for-profit model while publicly maintaining the non-profit mission.
* **November 2022: The Launch of ChatGPT**: OpenAI releases ChatGPT to the public. According to former board member Helen Toner, the board of directors was not informed in advance and learned about the release via Twitter.
* **April 2023: Authorization of "Clawbacks"**: Altman signs incorporation documents for an OpenAI holding company. These documents explicitly authorized the "equity clawback" provisions used to silence departing employees—the same provisions he later claimed to be unaware of.
* **July 2023: The Superalignment Team**: The company launches (with significant fanfare) a "Superalignment" team led by **Ilya Sutskever** and **Jan Leike**, promising to dedicate 20% of the company's computing power to solving the problem of AI control. However, Jan Leike later revealed that these resources were never actually delivered. Instead, the computing power was consistently redirected toward training commercial models. He described his team as "sailing against the wind" while trying to prioritize safety research over commercial speed:

    * **Leadership Departures**: Ilya Sutskever (Co-founder and Chief Scientist) left the company in May 2024; before he left, he had compiled a 52-page dossier documenting Sam Altman's "toxic behavior" and patterns of lying. Jan Leike resigned shortly after Sutskever, moving to the competitor Anthropic.
    * **Team Dissolution**: Following the departure of its leaders, the Superalignment team was officially dissolved. By August 2024, approximately half of OpenAI's safety-focused staff had left the company

* **November 17–22, 2023: Sam Altman Firing and Reinstatement**: The Board fires Altman for not being "consistently candid." After 5 days of pressure from Microsoft and employees, Altman is reinstated. The board members who fired him are removed and replaced.
* **May 2024: The Whistleblower Scandal**: Investigative reports (by Vox) expose the "draconian" exit agreements. Altman posts an apology on X, claiming he was "embarrassed" and didn't know about the clauses, but the 2023 signatures contradict this.
* **Spring 2024: GPT-4o and the "Speed over Safety" Shift**: To beat Google’s IO conference, OpenAI gives its safety teams only one week to test GPT-4o. Invitations to the launch party were sent out before safety testing had even begun.
* **August–October 2024: Exodus of Major figures** besides Superalignment Team,  **Mira Murati** (CTO), and **Daniel Kokotajlo**— resign, citing a breakdown in safety culture and trust.
* **Late 2025: Editing the Mission Statement**: In a quiet IRS disclosure, OpenAI edits its mission statement. They remove the word **"safely"** from the goal of "safely benefiting humanity," signaling the final priority shift of the organization.

### The Death of the "Cap" (2025–2026)

In late 2025, OpenAI underwent a major **recapitalization**. While it previously "capped" investor returns (originally at 100x), the new structure—forming **OpenAI Group PBC**—effectively removed these hard limits to attract the trillions of dollars needed for infrastructure.

* **Public Benefit Corporation (PBC):** This is a legal status that allows them to pursue profit like a "common" corporation but mandates that they also prioritize their mission (safe AGI).
* **The Nonprofit's Role:** The original nonprofit (now the **OpenAI Foundation**) still exists and holds a **26% equity stake**. It technically "controls" the for-profit arm, though critics argue this is more of a legal formality than a practical constraint on commercial strategy.

!!! warning "Counter questions"

    1. We need to very carefully look at what exact "cap" OpenAI has removed that investors were not "comfortable" with: these are **100x** returns. Once again: investors were not ok with 100x return! What does it tell us about [human nature](../thought-per-question/question-13.md#endless-greed)?

### Story with Pentagon (February 2026)

OpenAI had its role in the [episode](anthropic.md#conflict-with-pentagon-february-2026) in which the Pentagon pressed **Anthropic** for unrestricted use—and Anthropic **refused**, triggering a **national-security supply-chain** designation.

* **Timing:** Hours after the move against Anthropic, **OpenAI** announced a **new ~$200M** arrangement to put its models on **U.S. military classified networks**. OpenAI described **negotiated safeguards**; observers noted the **sequence** and asked whether OpenAI had **stepped in** where Anthropic had **stepped back**.
* **Internal cost:** The defense deal contributed to **high-profile departures** at OpenAI—notably **Caitlin Kalinowski** (hardware leadership), citing **ethical** concerns about military use and alignment with the mission.

[^1]: OpenAI justifies its "closed" nature by citing **safety**—arguing that releasing powerful model weights could allow bad actors to create dangerous tools. Critics argue that "safety" is a convenient excuse for a **commercial moat**. By keeping the models closed, OpenAI ensures that only they can monetize the breakthroughs they achieve.

## Current Conclusions and Open Questions

!!! note

    This may change with time on new data or thought arrival. Also, search for "counter questions" around this Doc (Section, All Docs) for more thought, contemplation and insight.

**Current Conclusions:**

1. There is an **extremely huge gap** between what OpenAI is saying and what they are actually doing. This gap gets wider with time.
1. Company's behavior makes both "existential" and work disruption and social unrest risks **higher** and public [initiatives](#new-social-contract-via-democratic-process) claiming the openness and responsibility in those conditions become **hypocritical** and not trustworthy.
1. Huge part of responsibility for this ethical misconduct belongs to the [**investors**](#the-death-of-the-cap-20252026) of the company.
1. While in this Docs we try to understand "the philosophy of Actors" treating them as solid entities, OpenAI's example demonstrates that there are different people within the companies and their personal attitude and responsibility may often make them leave the company.
1. At the same time, we need to understand the hidden amount of company staff (whose names we do not even know) who support what is happening and cause it.

**Open Questions:**

1. NA.
