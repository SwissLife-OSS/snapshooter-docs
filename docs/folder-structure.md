---
id: folder-structure
title: Folder Structure
sidebar_label: Folder Structure
---

All snapshots are stored on the file system alongside of the corresponding test.

## Snapshots folder

Every snapshot is stored in a subfolder, which is named `__snapshots__`.
This folder `__snapshots__` is in the same folder as the executing test class
and will always be created by the Snapshooter if not exist.

> All snapshots are always stored in the folder **`__snapshots__`**, which is
> next to the executing test class.

Example:

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

## Subfolders

If your test class file is located in a subfolder of your test project,
then also the snapshots of this test class are stored within this subfolder.

This ensures, that the snapshots are always alongside of your test.

Example:

```
Snapshooter.Examples.Xunit.csproj
│
├── 3_SubfolderTests
│   ├── __snapshots__
│   │       └── SubfolderTests.CreatePerson_SnapshotSavedInSubfolder_SuccessfullySaved.snap
│   ├── SubfolderTests.cs
│   └── SubSubfolderTests
│           ├── __snapshots__
│           │       └── SubSubfolderTests.CreatePerson_SnapshotSavedInSubSubfolder_SuccessfullySaved.snap
│           └── SubSubfolderTests.cs
.
.
.
```

[Go to example](https://github.com/SwissLife-OSS/snapshooter-examples/tree/master/Examples/Snapshooter.Examples.Xunit/3_SubfolderTests)

## Mismatch Folder

If a snapshot already exists in the `__snapshots__` folder and the test result
of the acutal running test does not match with the stored snapshot, then the
new test result will be serialized to a snapshot and saved in the subfolder
`__mismatch__` within the `__snapshots__` folder. Go to [Snapshot Mismatch Handling](snapshot-mismatch-handling)

> A mismatching snapshot will be saved in the `__snapshots__\__mismatch__`
> folder.

The `__mismatch__` folder will only be created if a snapshot mismatch happened.

The `__mismatch__` folder will be deleted every time when the snapshot test runs.

[Go to example](https://github.com/SwissLife-OSS/snapshooter-examples/tree/master/Examples/Snapshooter.Examples.Xunit/5_MismatchTests)
