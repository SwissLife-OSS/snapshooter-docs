---
id: get-started
title: Get Started
sidebar_label: Get Started
---

This Snapshooter **Get Started** has been created for the xUnit Test Framework. Snapshooter is also available for MsTest and NUnit Testing, the test procedure is exactly the same.

## Install Snapshooter

To validate your test result with snapshots in Xunit, just install the Snapshooter Xunit package:

```bash
dotnet add package Snapshooter.Xunit
```

(for MsTest --> Snapshooter.MsTest or for NUnit Snapshooter.NUnit)

## Create a Snapshot

Insert a snapshot assert statement `Snapshot.Match(yourResultObject);` into your unit test to create a snapshot.

During the test run, the `Snapshot.Match(person)` statement creates a new snapshot of your result object and stores it in the
`__snapshots__` folder.

Example:

```csharp
[Fact]
public void CreatePersonSnapshotTest()
{
    // arrange
    var serviceClient = new ServiceClient();

    // act
    TestPerson person = serviceClient.CreatePerson(
        Guid.Parse("2292F21C-8501-4771-A070-C79C7C7EF451"), "David", "Mustermann");

    // assert
    Snapshot.Match(person);
}
```

> The `__snapshots__` folder is always next to your executed unit test file.

## Review your Snapshot

Review your new snapshot file `__snapshots__/<UnitTestClassName>.<TestMethodName>.snap` if the data inside is what you expect.

## Rerun your Test

Now in every execution of your Test, the `Snapshot.Match(person)` statement will create again a snapshot of your test result and compares it against your reviewed snapshot in the `__snapshots__` folder.

> If your snapshot and your test result do not match with each other, then your test will
> fail with a snapshot mismatch exception. How you can handle/solve such a Snapshot Mismatch have a look [here](snapshot-mismatch-handling).

Snapshooter is very flexible, therefore you can give your [snapshots your own name](snapshot-naming),
or you can [ignore specific properties](snapshot-options) of your test results.
