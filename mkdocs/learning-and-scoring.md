---
description: Understand how ChirpQuiz tracks bird learning progress, schedules Training reviews, and awards points in Challenge mode.
---

# Learning and Scoring

ChirpQuiz tracks your learning progress. You can see each species' general learning status in the **My Lists** tab. The status describes how consistently you have identified the bird.

## How a bird's learning status changes

Each bird has a learning score from **0 to 3**. A bird with no saved history starts at 0.

| Score | Status in the app | Meaning |
| --- | --- | --- |
| 0 | **Review** | New or needs more practice. |
| 1 or 2 | **Learning** | Some progress has been recorded, but the bird is not yet consistently identified. |
| 3 | **Mastered** | The bird has reached the top of the learning scale. |

When a question is completed, a correct answer on the **first attempt** raises the bird's score by one, up to 3. If you make one or more mistakes before eventually answering correctly in Training, that completed question lowers the score by one instead. In Challenge, a wrong answer ends the question and lowers the score by one.

This is a small progression scale, not a percentage or a measured certainty. The app also records correct and incorrect outcomes, but the three statuses above are based on the 0-to-3 score. You can find birds by learning status in **My Lists**, or choose a status as a level in Learning Mode when there are enough birds in it.

## How Training decides what to ask next

The app uses a Leitner spaced-repetition system in Training: birds you are still learning come back sooner, while birds you identify consistently are shown less often. The review queue is separate for each quiz and level. For more about the method, see [the Leitner system on Wikipedia](https://en.wikipedia.org/wiki/Leitner_system). Challenge uses a random order, while still updating your general learning status when a question is resolved.

## How Challenge points work

Training does not award Challenge points. In Challenge, a correct answer adds points and a wrong answer costs one of the three lives. The number of points per correct answer depends on the challenge type:

- **Finite Challenge quizzes** award **1 point** per correct answer.
- **Endless General Quiz Challenge** normally calculates points from how closely related the three incorrect choices are to the target bird.
- With **Expert mode** enabled, every correct answer is worth **1 point**, including in the endless General Quiz.

For the endless General Quiz scoring calculation, the app compares the target species with its three distractors:

| Relationship to the target | Base points |
| --- | ---: |
| At least one distractor is in the same genus | 6, plus 1 for each additional same-genus distractor |
| No same-genus distractor, but at least one is in the same family | 3 |
| No same-family match, but at least one is in the same order | 2 |
| No match at those levels | 1 |

There is an additional point when at least two distractors share the target's family but are from a different genus. The final value is capped at 9. In general, close taxonomic alternatives make the question worth more because they are harder to distinguish.

The score displayed during Challenge is the current run's total. The trophy value is your saved best for that quiz level and area/season selection. The app saves a new best when the run exceeds the previous score, and records whether a finite challenge has been completed.

## Expert mode is not the same as Expert difficulty

These are separate settings:

- **Expert difficulty** makes distractors more closely related to the target bird in multiple-choice quizzes. In the General Quiz it also selects a less common observation-frequency range and considers more recordings.
- **Expert mode** replaces the four answer buttons with a searchable list of all birds in the current quiz. In Challenge, each correct answer is worth one point, the mode does not change the quiz pool or number of lives.

See [Difficulty](difficulty.md) for the difficulty presets and custom controls, and [Quiz Modes](quiz-modes.md) for how Training and Challenge differ.