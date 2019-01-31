## Agenda
1. What's a bug?
2. Good habits for avoiding bugs
3. Debugging techniques & tools
  * "debuggers"
  * PDB: The Python Debugger
  * IPDB: The IPython Debugger
4. Common error messages and what they mean

### Installing IPDB

`pip install ipdb`

### PDB/IPDB Things
* `import pdb` or `import ipdb`
* `pdb.set_trace()` or `ipdb.set_trace()`
  * always somewhere _before_ any errors, not after
* `continue` or `c` for short
  * to resume execution of program
* `next` or `n` for short
  * go to next line
* `step` or `s` for short
  * go to next or step into function called on current line
  * like `next` but more granular
* `list` or `l` for short
  * to see where you are the in code


