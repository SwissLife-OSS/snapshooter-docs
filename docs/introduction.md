---
id: introduction
title: Introduction
sidebar_label: Introduction
---

Snapshooter is a flexible .Net testing tool, which can be used to validate all your test results with one single assert.
It creates simply a snapshot of your test result object and stores it on the file system. If the test is executed again, the test result will be compared with the stored snapshot. If the snapshot matches to the test result, the test will pass.

The Snapshooter snapshot testing is based on the concept of **[Jest Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing/)**.

### Supported Test Frameworks

The Snapshooter snapshot testing is available for the following .Net Test Frameworks:

1. [xUnit](https://xunit.net)
2. [NUnit](https://nunit.org)
3. MsTest (coming soon)

### Getting Started

To get started in a few minutes, we have prepared an example with xUnit, which
explains you the most important steps and shows you how to handle the snapshots.

[Get Started](get-started.md)

### Basic Concept

To understand the basic concept and idea of the snapshot testing, go to the
Basic Concepts. It also explains where and in which format
the snapshots are stored on the file system.

[Basic Concepts](basic-concept.md)

### Examples

On Github we have prepared some common examples, which you can use as a template
or as best practices for also more complex snapshot test cases.

[Examples](https://github.com/SwissLife-OSS/snapshooter-examples)

### Documentation

- Snapshot Naming (Name Extensions)
- Folder Structure
- Overwrite Old Snapshots
- Ignore Fields
- Assert Fields
- Check Type Of Fields
- Scalar Types Snapshots

### Guides

- Using with xUnit
- Using with NUnit
- Using with MsTest
