---
description: Learn how ChirpQuiz selects target birds and answer choices for each quiz, including the effects of area, season, and difficulty.
---

# How Birds Are Selected

There are two different selections in each question:

1. The **target bird** is the species whose recording you hear.
2. The other three answer choices are **distractors**. Their similarity is controlled by the difficulty setting.

Difficulty does not usually change the target pool. The quiz type and, for area-based quizzes, your selected area and season determine which target birds are eligible.

## Quiz types

| Quiz | Birds that can appear |
| --- | --- |
| **General Quiz** | Birds in the selected area and season, narrowed by the observation-frequency range. The range is part of difficulty settings. If it leaves too few species, the quiz falls back to all birds matching the area and season. |
| **Common Birds** | The most frequently observed birds in the selected area and season. Choose a level for the 10, 20, or 30 most common species. |
| **My Lists** | Birds in the list you selected. Create and manage lists in **Search**. A list needs at least four birds to be used in a quiz. |
| **Learning Mode** | Birds in the learning-status group you selected: **Review**, **Learning**, or **Mastered**. Groups with too few birds are not offered as quiz levels. |
| **Classification** | Birds in a selected scientific group, such as an order, family, or genus, within your area and season. Available groups depend on those settings. |

Area and season filters are used for General, Common Birds, and Classification quizzes. My Lists uses the contents of your list; Learning Mode uses your saved learning status.

## How distractors are chosen

The app uses bird classification to find alternatives at the similarity level you selected. For example, closer choices may come from the same family or genus. It tries to use birds from the current quiz's eligible pool, so a question stays consistent with that quiz. If the pool does not contain enough choices at the requested similarity, the app broadens the search to less closely related groups.

If there are not enough eligible birds to make a four-choice question, the quiz may show an error. Try a broader area, another season or quiz, or a list with more birds.

## Learning and repetition

Training uses an adaptive review queue. Birds you miss move toward more frequent review; birds you answer correctly move through review stages and are shown less often. New birds are introduced as room becomes available, so a long session is not simply a fixed shuffled list. The queue is saved separately for each quiz and level. This scheduling state is different from the per-species **Review / Learning / Mastered** status; see [Learning and scoring](learning-and-scoring.md).

Challenge uses a simple random order and does not use that spaced-repetition queue. Your learning status is still updated from your answers and can be used in Learning Mode.