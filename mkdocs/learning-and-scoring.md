---
description: Understand how ChirpQuiz tracks bird learning progress, schedules Training reviews, and awards points in Challenge mode.
---

# Learning and Scoring

ChirpQuiz tracks two kinds of learning progress. A species has a general learning status that appears in **Learning Mode**. Training also keeps a review queue for each quiz and level. The first status describes how consistently you have identified the bird; the queue controls when it returns during that particular Training quiz.

## How a bird's learning status changes

Each bird has a learning score from **0 to 3**. A bird with no saved history starts at 0.

| Score | Status in the app | Meaning |
| --- | --- | --- |
| 0 | **Review** | New or needs more practice. |
| 1 or 2 | **Learning** | Some progress has been recorded, but the bird is not yet consistently identified. |
| 3 | **Mastered** | The bird has reached the top of the learning scale. |

When a question is completed, a correct answer on the **first attempt** raises the bird's score by one, up to 3. If you make one or more mistakes before eventually answering correctly in Training, that completed question lowers the score by one instead. In Challenge, a wrong answer ends the question and lowers the score by one. Scores cannot go below 0 or above 3.

This is a small progression scale, not a percentage or a measured certainty. The app also records correct and incorrect outcomes, but the three statuses above are based on the 0-to-3 score. You can find groups of birds in Search or choose a status as a level in Learning Mode when there are enough birds in it.

## How Training decides what to ask next

Training maintains a separate queue for each quiz and level. It groups the eligible birds into review stages, initially informed by each bird's learning score. The stages are:

1. New or not yet learned
2. Early practice
3. Later practice
4. Mastered review

The queue tries to keep up to eight birds active. When a bird is answered correctly on the first try, it advances one stage. When a question includes a mistake, it moves back one stage. Birds at the final mastered stage leave the active queue and can return later as review. If the quiz needs more active birds, it introduces unseen birds first, then birds in progress, and uses mastered birds as a fallback.

When choosing among active birds, the queue favors new and early-practice birds. Later-practice birds appear less often, and mastered birds have the lowest selection weight. If a quiz has only a few eligible birds, the queue can include all of them and repeats will be more frequent.

Training progress is remembered separately for each quiz and level. The general learning status is shared with Learning Mode, but the exact review stage is specific to that Training quiz. Challenge uses a random order rather than this Training queue, while still updating the general learning status when a question is resolved.

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

- **Expert difficulty** makes distractors more closely related to the target bird. In the General Quiz it also selects a less common observation-frequency range and considers more recordings.
- **Expert mode** fixes Challenge points at one per correct answer. It does not change the selected target, distractors, or number of lives.

See [Difficulty](difficulty.md) for the difficulty presets and custom controls, and [Quiz Modes](quiz-modes.md) for how Training and Challenge differ.