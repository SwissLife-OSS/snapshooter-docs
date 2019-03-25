---
id: basic-concept
title: Basic Concept
sidebar_label: Basic Concept
---

A typical snapshot test case in .Net is, if you have a complex test result object
with several properties to validate and all these properties should always
be the same.

Instead of writing multiple tests or multiple asserts for each property in your
test, a snapshot can be created and stored alongside the executed test. Now,
every time when the test is executed, the test result object will be compared
with the stored snapshot file. The test will fail, if the snapshots
do not match.

> Usually in unit tests you have exactly one assert statement, therefore
> snapshot tests are not suitable for pure unit tests.

## Snapshot Creation Concept

If in an unit test the statement `Snapshot.Match(yourResultObject);` is used,
the Snapshooter serializes the given result object into a **JSON** string
(which is the snapshot) and saves it on the file system alongside the executed
test.

> The format of the stored snapshot will be **JSON**.

The default snapshot name will be generated out of the class name and test
method name. Additionally, every snapshot file name ends with **.snap**. If
you want to specify your own snapshot name, then go to
[Snapshot Naming](snapshot-naming)

> Snapshot default name: `<UnitTestClassName>.<TestMethodName>.snap`

The name of folder, which will contain the snapshots of the tests is always `__snapshot__`. This folder will be always generated automatically from the
Snapshooter if not exists.

```
MyTestApplication.csproj
│
├── __snapshots__
│   ├── UserServiceTests.GetFirstUserTest.snap
│   ├── UserServiceTests.GetFirstUserTest.snap
│   └── UserServiceTests.FindUserByIdTest.snap
│
└── UserServiceTests.cs
```

If your test file is in a subfolder, then the `__snapshot__` folder will be
created in this subfolder and the snapshot is stored there. This guarantees that
the snapshot is always saved aloangside your test.

## Snapshot Validation Concept

If a test will be executed and a snapshot already exists in the `__snapshot__` folder for this test, then
Snapshooter serializes the current test result into a snapshot (JSON) and compares
it with the already existing snapshot on the file system (`__snapshot__` folder).

### Snapshot Match Handling

If the two snapshots match, then the test will pass and every thing
is fine.

### Snapshot Mismatch Handling

If the two snapshots have some differences, then the test will fail and a specific
error message will be shown. The error message will give you the exact position
and text part, which is not equal.
In Addition, the newly created snapshot of the current test result will be stored
in the subfolder `__snapshot__\mismatch` with the exact same snapshot name.

> A mismatching snapshot will automatically be saved in the
> `__snapshot__\mismatch` folder.

Now you can compare the two snapshots with a file compare util and check the
differences.

If the new mismatching snapshot file is correct, then you can move it from
the `__snapshot__\mismatch` folder to the parent folder `__snapshot__` and
overwrite the existing snapshot.

If the new mismatching snapshot file is wrong... then verify your code....
