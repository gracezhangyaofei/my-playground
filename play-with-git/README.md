# Check it out LOL

## How to add a changed file to an older (not last) commit in Git

```
git add <my fixed files>
git commit --fixup=OLDCOMMIT
git rebase --interactive --autosquash OLDCOMMIT^
```

# How to remove last pushed data
```
git rebase -i
git reset --soft HEAD^
git push origin +master
```