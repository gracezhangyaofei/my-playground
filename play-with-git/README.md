# Check it out LOL

## How to add a changed file to an older (not last) commit in Git

```
git add <my fixed files>
git commit --fixup=OLDCOMMIT
git rebase --interactive --autosquash OLDCOMMIT^
```

# How to remove last committed data
```
git reset HEAD~
```

# How to remove last pushed data
```
git rebase -i
git reset --soft HEAD^
git push origin +master
```

# Hmm amend is quite useful
```
git rebase -i
git reset --soft HEAD^
git push origin +master
```

# Notes
```
# Commands:                                                                      
# p, pick = use commit                                                           
# r, reword = use commit, but edit the commit message                            
# e, edit = use commit, but stop for amending                                    
# s, squash = use commit, but meld into previous commit                          
# f, fixup = like "squash", but discard this commit's log message                
# x, exec = run command (the rest of the line) using shell                       
# d, drop = remove commit                                                        
#                                                                                
# These lines can be re-ordered; they are executed from top to bottom.           
#                                                                                
# If you remove a line here THAT COMMIT WILL BE LOST.                            
#                                                                                
# However, if you remove everything, the rebase will be aborted.                 
#                                                                                
# Note that empty commits are commented out                                      
```
