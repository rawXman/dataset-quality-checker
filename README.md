# Dataset Quality Checker

A lightweight browser-based tool for inspecting JSON datasets used in AI data annotation and training workflows.

## Features

- Upload a JSON dataset directly in the browser
- Parse JSON files using the FileReader API
- Count the total number of objects
- Count unique classes
- Show class distribution and percentages
- Detect missing `class` fields
- Detect missing `id` fields
- Detect duplicate object IDs
- Display duplicate IDs
- Calculate the total number of quality issues
- Display a compact dataset quality report
- Handle clean datasets without displaying empty quality warnings

## Example Dataset

The test datasets contain objects with class labels such as:

- `cat`
- `dog`
- `car`

The project includes test datasets for different quality scenarios:

- `test-clean.json` — valid dataset without quality issues
- `test-quality.json` — dataset containing multiple quality issues
- `test-invalid.json` — invalid dataset structure
- `test-duplicates.json` — duplicate object IDs
- `test-broken.json` — broken dataset structure

## Example Report

```text
Dataset Quality Report

Objects: 5
Classes: 3

Class distribution:
cat: 1 (20.0%)
dog: 2 (40.0%)
car: 1 (20.0%)

Quality issues:

⚠ Missing class: 1
⚠ Missing ID: 1
⚠ Duplicate objects: 1
Duplicate IDs: 2

Quality issues: 3
For a clean dataset:
Dataset Quality Report

Objects: 3
Classes: 3

Class distribution:
cat: 1 (33.3%)
dog: 1 (33.3%)
car: 1 (33.3%)

Quality issues: 0
Technologies
HTML5
CSS3
JavaScript
JSON
FileReader API
Git / GitHub
How to Run

No installation or dependencies are required.

Clone or download the repository.
Open index.html in a browser.
Select a .json dataset.
Review the dataset quality report.
Project Goal

This project is part of a portfolio focused on practical tools for AI data annotation, dataset quality and AI training workflows.

The goal is to build small utilities that can help identify common dataset issues before data is used for AI training.

Related Project

AI Dataset Labeler

Author

Roman Pushkarev

GitHub: @rawXman