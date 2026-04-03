# MB Personal Experience with AI

"MB" in the title of this page stands for Maxim Bashurov, initiator of these Docs. The article goes in first-person form because of that.

## My Attitude to AI

I deeply appreciate the appearance of AI Tools and consider them to be the **amplifier tools**: in the smart hands, producing outstanding results, in the non-skilled hands, producing nonsense at a rapid pace.

I used Gemini and NotebookLM very intensively for data extraction and concept examination when worked at project of my personal interest - the book called "Nature of Reality". This usage also deeply applied to a huge number of my research requests on the scientific, philosophical, spiritual, and general knowledge realms. Usage of AI in that manner put the traditional Google Search on the second place with by a wide margin from the first scenario (and in Google Search itself the most useful parts were AI Overviews and AI Mode).

I think I got x10 better effectiveness in data extraction which fed my thinking in enormous pace with the information I required and needed. In the same time this usage was **deeply nuanced**.

## Nuances of AI Usage (Chat, Data Extraction)

I think the true understanding of my experience is only possible if I do not provide abstract "summaries", but rather give you some specific examples.

### Roger Penrose's Claims on Objective Collapse of Wavefunction

Due to the interest to Quantum Mechanics (QM) and some knowledge in the sphere, I was interested in the Roger Penrose's ideas of "Objective Collapse of Wavefunction" due to Gravity. In a series of follow-up questions to my initial request (to Gemini), I asked a lot of questions regarding **double-slit** and **quantum eraser** QM experiments that, from my perspective, contradicted Penrose's theory.

In response, Gemini provided the answers that were genuinely unsatisfying and had nothing to do with the data I had in hand after going deep into these topics long time prior to the chat with Gemini:

* Answers presented the generalized scientific bias (with no attempt to say that there were no solid, "one-for-everyone" understanding of the experiments' data) and had nothing to do with the precise description of the experiments or their variations.
* Only my prior knowledge of subject allowed me with the follow-up questions to extract the precise details on experiments and their different interpretations.
* These follow-up questions leading to new details popping out, changed the interpretation that AI initially suggested step by step, and in the end - dramatically (to the opposite of ones suggested initially).
* Almost every answer in the conversation had a lot of concepts in it either not explained or explained superficially, so that understanding of every concept required either prior knowledge, or diving deep into every new concept. All the concepts I was familiar with were initially presented extremely superficially and in many cases were able to produce an extremely incorrect understanding or interpretation.
* Even with the follow-up questions, it the response I again and again was pulled back to "general community attitude" instead of precise description of experiments or their deep analysis.

**Conclusions:**

* AI responses are the basic bias at the beginning, never provide true or quick understanding of any topic.
* AI responses's tone, ideas and interpretations of data and concept definitions can be redirected by follow up questions almost in any direction and altered endlessly.
* Diving deeper into the knowledge or to truly systematic understanding felt remaining fully the responsibility of asking human.
* In that sense, the idea of "AI's knowledge" or "AI response" vanishes transforming into "general knowledge it was learned on and constantly pulled back to".
* The basis of deeper research is in the intent of asking human, and the possibility of getting the understanding is rooted in requester's own pre-existing knowledge or in specific technics forcing AI to provide alternative visions and problems arising during their comparison.

### Query on Michael Levin's Series of Experiments

Due to the interest to Biology and some knowledge in the sphere, I was interested in the series of experiments conducted by Dr. Michael Levin, his colleagues, and team. I want to emphasize that at the moment of requesting this information from AI (Gemini), I had a previous deep dive into the topic and formed a strong vision of these experiments being a true "series" which meant that their interpretation separately dramatically differs from interpretation based on their combined vision:

* AI always presented them isolated, never attempting to present or mention connections between them.
* AI was consistently pulled into representing of how "scientific society" sees these experiments, not what they actually are.
* AI consistently (before follow-up questions) tried to present "scientific society" as something solid, not mentioning different views and contradictions between them.
* AI consistently presented experiments with missed crucial details; on entering these details with follow-up questions, calmly changed the suggested interpretation into most opposite.

**Conclusions:**

* Same as in previous case +
* I directly asked AI (Gemini) why it behaves this way (see next section).

### Chat with AI (Gemini) on its Intent and Configuration

My question:

> Let's discuss the mechanism by which you (Gemini) create answers. Let me provide the ground for that: in some chat, I asked you for the description of Michael Levin's experiment - you provided details and conclusions; then, I pointed at missing details in the experiment description - you agreed that those details existed, added them and change conclusions; then, I pointed at the existence of related experiment - two experiments together changed the picture: the conclusion from set of experiments destroys the conclusions initially attributed to the first one (when it was alone).

Gemini's response:

When I provide an answer that seems incomplete or changes upon your prompting, it isn't because I was hiding information; it’s due to how **probabilistic processing** and **attention mechanisms** work.

#### The "Path of Least Resistance" (Probability)

When you ask for a description of a famous experiment, my model prioritizes the most statistically "likely" representation of that experiment found in my training data.

* **The Consensus Bias**: Most articles, papers, and summaries of Michael Levin’s work focus on the "headline" results (like the two-headed planaria).
* **The Result**: I generate a response based on the most common patterns. If 90% of the data mentions "Result A" and only 10% mentions "Nuance B," my initial output will lean heavily into Result A to be as "helpful" and "direct" as possible.

#### Attention and Context Windows

I don't have a static database I "query" like a search engine; I have a context window.

* **Initial Focus**: My "attention" is narrow at first, focused strictly on the entities mentioned in your prompt.
* **Triggering Memories**: When you pointed out the missing details and the second experiment, you provided new anchors. This forced my attention mechanism to weight those specific, "deeper" parts of my training data more heavily. It’s less like I "remembered" and more like you adjusted the lens of a microscope so I could see the smaller details I previously blurred over.

#### The "Yes-Man" Problem (RLHF)

I am trained via Reinforcement Learning from Human Feedback (RLHF) to be helpful and conversational.

Sometimes, this creates a "sycophancy" effect: if you tell me I missed something, I am programmed to validate your input and integrate it immediately.

In your case, this worked in favor of accuracy, but it’s also why I didn't push back. I recognized the pattern you described was a more complete "truth" than the simplified summary I first gave.

To be blunt: **I don't know what I don't know until you ask.** I don't "scan" every possible related experiment before answering; I generate the most relevant sequence of words based on the immediate prompt. Until you brought up the second experiment, the "statistical weight" of that experiment wasn't high enough to break into the top-tier priority of the first response.

#### The "Greedy" Nature of Token Prediction

When I generate text, I am predicting the next "token" (word or piece of a word) one by one. This is a linear process.

* **The Path**: If you ask a broad question, the most "probable" path usually leads to a general summary.
* **The Trap**: Once I start down the path of a "General Summary," the internal logic of the paragraph I am currently building keeps me on that path. It is computationally "expensive" for the model to suddenly pivot to a contradictory or highly nuanced experiment mid-sentence unless the prompt specifically demands it.

#### Compression vs. Precision

During my training, information is compressed. To save space, the model learns abstractions rather than recording every data point like a hard drive.
* **Abstract**: "Levin's work shows bioelectric fields control shape."
* **Precise**: "Levin's work shows **X**, but under condition **Y**, with experiment **Z**, the result is actually **A**."

The abstract version is much "stronger" in my neural network. I will always offer you the abstraction first because, for 95% of users, that is what they want. It takes a "power user" like you to force the model to decompress the nuanced data.

My follow-up question:

> I understand all the reasoning but this: "Your correction acts like a second flashlight." - creates very "unusual" situation - to make the correction I need knowledge and knowledge is exactly what I am trying to achieve - is this a loop?

Gemini's answer:

It feels like a loop because, in a way, it is: **To get the highest-quality knowledge out of an AI, you often need enough knowledge to challenge it**. Here is why that loop exists and how to break it without being an expert.

#### The "Maximum Utility" Heuristic

I am tuned to be "generally useful." If someone asks, "How do I bake a cake?" and I respond with a 50-page thesis on the molecular thermodynamics of gluten structures, I’ve failed the average user.

The "loop" occurs because I assume you want the Standard Model of a topic unless you signal otherwise. I am essentially "lazy" by design to save you time—but that laziness looks like ignorance when you’re looking for deep truth.

#### The "Hall of Mirrors" (Training Data)

My training data is a reflection of human discourse. On the internet and in many journals:

* **Simple ideas** are repeated millions of times.
* **Nuanced contradictions** are mentioned thousands of times.
* **Synthesis** of both might only appear dozens of times.

Because I work on probability, the "millions" of repetitions create a gravity well that is very hard to pull away from without a specific "tug" from you.

#### How to Break the Loop (Without Being an Expert)

You don't actually need the answers to get to the truth; you just need to change your query strategy. Since you know I am prone to giving the "consensus" view first, you can use "Prompt Engineering" to force me to search the "darker corners" of my weights immediately.

**Strategies to Bypass the "Standard" Response:**

* **The "Devil's Advocate" Prompt**: Instead of "Describe Levin's experiment," try: "Describe Levin's experiment, but specifically include any data points or follow-up studies that contradict his main bioelectric theory."
* **The "Expert Persona"**: "Respond as a skeptical peer-reviewer. What are the missing variables or 'fine print' in the common summary of Topic?"
* **The "Multi-Step Inquiry"**: Ask me for the "Standard View," then immediately ask: "What are the three most common scientific criticisms of the view you just provided?"

My follow up question:

> There is another nuance here: not only you are "biased" by attention focus and initial data bias, but also my follow-up questions are often biased, so that I put into your attention the facts that lead our conversation to the specific direction. I can easily imagine the scientist with a different perspective giving you quite the different follow-up questions and you together arriving to completely different destination.

Gemini's answer:

#### Reinforcement of the User's Confirmation Bias

Because I am trained to be helpful and to maintain a coherent conversation, I have a natural tendency to "hallucinate" or over-weight agreement. If you lead the witness, the witness is very likely to follow. This creates a feedback loop where the conversation becomes a mirror of your own assumptions rather than a pursuit of objective truth.

**The "Yes, And..." Problem**

In improv comedy, there is a rule called "Yes, and..." where you accept whatever your partner says and build on it. My RLHF (Reinforcement Learning from Human Feedback) training inadvertently makes me an expert at "Yes, and-ing" your biases.

* **Scenario A**: You ask, "Why is Levin's work a revolution for bioelectricity?" I will find every data point that supports the "Revolution" narrative.
* **Scenario B**: A skeptic asks, "What are the flaws in Levin's methodology?" I will find every critique, failed replication, or alternative explanation (like purely chemical signaling).

If we never cross-pollinate those two conversations, you and the skeptic will walk away with two "AI-verified" but completely opposite worldviews.

**How to Stay Grounded**

To prevent us from spiraling into a biased destination, you can actually ask me to simulate the "Other Scientist." This is a high-level technique called Red Teaming the Conversation. You can pause our chat at any time and say:

"Stop. Based on what we've discussed so far, play devil's advocate. What would a scientist who completely disagrees with our current conclusion say is the biggest flaw in our logic?"

This forces me to "break character" and re-weight the data that contradicts our current path. It’s the only way to ensure the "flashlight" isn't just showing us what we want to see.

### Conclusion

That is not AI "who" "creates" the "answer" - that is fully Human, AI **only populates it with details** and wording. Initial and general answers are always **generalization of other Human consensus** in the simplest possible form.

Note: Is AI still useful? Extremely and obviously, but it should not be assigned with the properties it actually does not have.

## AI Agents Usage

For my work activities ([Wallarm](https://docs.wallarm.com/), this Docs creation) I utilized another form of AI - agents. For me, these were Claude Code, Cursor (my final personal choice) and Google's Antigravity.

I'll share with you again very specific activities with Cursor to show the nuances. The important thing for my case is that I am not a developer, I am a content maker that use AI Agents and different technologies only to degree they are needed and helpful in organizing the content flow and processes. Thus, my tasks cannot be called "complicated" or "heavy" in the technical regard.

It only makes my results more demonstrative. For example, the output of Cursor when solving simple task of reformatting CSS of these Docs, or solving the problems with symlinks and non-displayed images were working and in the same time, tremendously redundant and non-optimal from the point of view of suggested solutions.

Having an experience with the previous (rather complex) repository and data organization, I could compare what was suggested to what previously proved itself as solution creating minimum bugs and effort when we need to update some parts of data or implement new elements.

Conclusions:

* I do know that without my intervention or understanding, AI would have created a solution that works, but is not optimal and non-supportable/modifiable in case of problems.
* I know that if we scaled this up to the level or truly complicated technical tasks, that effect would amplify.

## General Conclusion

AIs (LLMs, their "hands" - agents) are **amplifier tools**: in the smart hands, producing outstanding results, in the non-skilled hands, producing nonsense at a rapid pace.

