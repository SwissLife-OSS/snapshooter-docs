---
id: snapshot-naming
title: Snapshot Naming
sidebar_label: Snapshot Naming
---

The name of a snapshot is its unique identifier. If two separate snapshots
have the exactly same name, then some mismatch failures will occur.
Therefore make sure, that the snapshot name is always unique in the
`__snapshot__` folder.

## Default Snapshot Name

If no snapshot name is explicitly defined in the snapshot match statement,
then Snapshooter will create per default a unique snapshot name for your
snapshot.

The default snapshot name is a composition of the test class name and
the test method name. Additionally, every snapshot file name ends with
**.snap**.

`Snapshot.Match(yourResultObject);`

> Snapshot default name: `<TestClassName>.<TestMethodName>.snap`

<!-- snippet: DefaultSnapshotName_SnapshotWithDefaultName -->
<a id='snippet-defaultsnapshotname_snapshotwithdefaultname'/></a>
```cs
[Fact]
public void CreatePerson_DefaultSnapshotName_SnapshotWithDefaultName()
{
    // arrange
    var serviceClient = new ServiceClient();

    // act
    var person = serviceClient.CreatePerson(
        Guid.Parse("1192F21C-8501-4771-A070-C79C7C7EF411"), "Albert", "Einstein");

    // assert

    // Snapshot name is NamingTests.CreatePerson_DefaultSnapshotName_SnapshotWithDefaultName.snap
    Snapshot.Match(person);
}
```
<sup><a href='/snippets/Snippets/Snippets.cs#L9-L25' title='File snippet `defaultsnapshotname_snapshotwithdefaultname` was extracted from'>snippet source</a> | <a href='#snippet-defaultsnapshotname_snapshotwithdefaultname' title='Navigate to start of snippet `defaultsnapshotname_snapshotwithdefaultname`'>anchor</a></sup>
<!-- endsnippet -->

## Defined Snapshot Name

If you need a completely different snapshot name, you have the possibility
to overwrite the default snapshot name. The snapshot name can be defined
in the snapshot match statement.

`Snapshot.Match(yourResultObject, "MyOwnSnapshotName1");`

This will result in **MyOwnSnapshotName1.snap**

<!-- snippet: DefinedSnapshotName_SnapshotWithDefinedName -->
<a id='snippet-definedsnapshotname_snapshotwithdefinedname'/></a>
```cs
[Fact]
public void CreatePerson_DefinedSnapshotName_SnapshotWithDefinedName()
{
    // arrange
    var serviceClient = new ServiceClient();

    // act
    var person = serviceClient.CreatePerson(
        Guid.Parse("1192F21C-8501-4771-A070-C79C7C7EF411"), "Albert", "Einstein");

    // assert

    // Snapshot name is ExplicitlyDefinedSnapshotName.snap
    Snapshot.Match(person, "ExplicitlyDefinedSnapshotName");
}
```
<sup><a href='/snippets/Snippets/Snippets.cs#L27-L43' title='File snippet `definedsnapshotname_snapshotwithdefinedname` was extracted from'>snippet source</a> | <a href='#snippet-definedsnapshotname_snapshotwithdefinedname' title='Navigate to start of snippet `definedsnapshotname_snapshotwithdefinedname`'>anchor</a></sup>
<!-- endsnippet -->

## Snapshot Name Extension

In some cases, people want to keep the default snapshot naming
`<TestClassName>.<TestMethodName>`, but they also want to be able
to add some specific values (text, id, time etc.) to the default
snapshot name.

For this case we created the snapshot name extension possibility, where
you can add values to the default snapshot name.

The type of the extension
values does not matter, it will be converted into a string and concatenated
by an underscore "\_".

`Snapshot.Match(person, SnapshotNameExtension.Create("Age", 88, "Prof"));`

Snapshot extended name: `<TestClassName>.<TestMethodName>_Age_88_Prof.snap`

<!-- snippet: SnapshotNameWithNameExtensions_SnapshotWithDefaultNameExtensions -->
<a id='snippet-snapshotnamewithnameextensions_snapshotwithdefaultnameextensions'/></a>
```cs
[Fact]
public void CreatePerson_SnapshotNameWithNameExtensions_SnapshotWithDefaultNameExtensions()
{
    // arrange
    var serviceClient = new ServiceClient();

    // act
    TestPerson person = serviceClient.CreatePerson(
        Guid.Parse("1192F21C-8501-4771-A070-C79C7C7EF411"), "Albert", "Einstein");

    // assert

    // Snapshot name is NamingTests.CreatePerson_SnapshotNameWithNameExtensions_SnapshotWithDefaultNameExtensions_Age_88_Prof.snap
    Snapshot.Match(person, SnapshotNameExtension.Create("Age", 88, "Prof"));
}
```
<sup><a href='/snippets/Snippets/Snippets.cs#L61-L77' title='File snippet `snapshotnamewithnameextensions_snapshotwithdefaultnameextensions` was extracted from'>snippet source</a> | <a href='#snippet-snapshotnamewithnameextensions_snapshotwithdefaultnameextensions' title='Navigate to start of snippet `snapshotnamewithnameextensions_snapshotwithdefaultnameextensions`'>anchor</a></sup>
<!-- endsnippet -->
