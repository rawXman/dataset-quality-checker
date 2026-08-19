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

| File | Description |
|---|---|
| `test-clean.json` | Valid dataset without quality issues |
| `test-quality.json` | Dataset containing multiple quality issues |
| `test-invalid.json` | Invalid dataset structure |
| `test-duplicates.json` | Dataset containing duplicate object IDs |
| `test-broken.json` | Broken dataset structure |

## Example Report

### Dataset with quality issues

**Objects:** 5  
**Classes:** 3

### Class distribution

| Class | Count | Percentage |
|---|---:|---:|
| cat | 1 | 20.0% |
| dog | 2 | 40.0% |
| car | 1 | 20.0% |

### Quality issues

- ⚠️ Missing class: 1
- ⚠️ Missing ID: 1
- ⚠️ Duplicate objects: 1
- Duplicate IDs: 2

**Quality issues:** 3

### Clean dataset

**Objects:** 3  
**Classes:** 3

### Class distribution

| Class | Count | Percentage |
|---|---:|---:|
| cat | 1 | 33.3% |
| dog | 1 | 33.3% |
| car | 1 | 33.3% |

**Quality issues:** 0

## Technologies

- HTML5
- CSS3
- JavaScript
- JSON
- FileReader API
- Git / GitHub

## How to Run

No installation or dependencies are required.

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Select a `.json` dataset.
4. Review the dataset quality report.

## Project Goal

This project is part of a portfolio focused on practical tools for AI data annotation, dataset quality and AI training workflows.

The goal is to build small utilities that can help identify common dataset issues before data is used for AI training.

## Related Project

**AI Dataset Labeler**

## Author

**Roman Pushkarev**

GitHub: `@rawXman`