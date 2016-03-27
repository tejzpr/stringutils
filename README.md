# StringUtils
####A JavaScript clone of Apache's Java StringUtils, implemented using TypeScript

Methods that have been implemented currently are:
 1. isEmpty
 2. isNotEmpty
 3. isBlank
 4. isNotBlank
 5. clean
 6. trim
 7. trimToNull
 8. trimToEmpty
 9. replace

---
###isEmpty
Checks if a String is empty ("") or null.

     StringUtils.isEmpty(null)      = true
     StringUtils.isEmpty("")        = true
     StringUtils.isEmpty(" ")       = false
     StringUtils.isEmpty("bob")     = false
     StringUtils.isEmpty("  bob  ") = false
 
**Parameters:**
str - the String to check, may be null

**Returns:**
true if the String is empty or null 

---
###isNotEmpty
Checks if a String is not empty ("") and not null.

     StringUtils.isNotEmpty(null)      = false
     StringUtils.isNotEmpty("")        = false
     StringUtils.isNotEmpty(" ")       = true
     StringUtils.isNotEmpty("bob")     = true
     StringUtils.isNotEmpty("  bob  ") = true
 
**Parameters:**
str - the String to check, may be null

**Returns:**
true if the String is not empty and not null

---
###isBlank
Checks if a String is whitespace, empty ("") or null.

     StringUtils.isBlank(null)      = true
     StringUtils.isBlank("")        = true
     StringUtils.isBlank(" ")       = true
     StringUtils.isBlank("bob")     = false
     StringUtils.isBlank("  bob  ") = false

**Parameters:**
str - the String to check, may be null

**Returns:**
true if the String is null, empty or whitespace

---
###isNotBlank
Checks if a String is not empty (""), not null and not whitespace only.

     StringUtils.isNotBlank(null)      = false
     StringUtils.isNotBlank("")        = false
     StringUtils.isNotBlank(" ")       = false
     StringUtils.isNotBlank("bob")     = true
     StringUtils.isNotBlank("  bob  ") = true

**Parameters:**
str - the String to check, may be null

**Returns:**
true if the String is not empty and not null and not whitespace

---
###clean
Removes control characters (char <= 32) from both ends of this String, handling null by returning an empty String ("").

     StringUtils.clean(null)          = ""
     StringUtils.clean("")            = ""
     StringUtils.clean("abc")         = "abc"
     StringUtils.clean("    abc    ") = "abc"
     StringUtils.clean("     ")       = ""

 
**Parameters:**
str - the String to clean, may be null

**Returns:**
the trimmed text, never null

---
###trim

Removes control characters (char <= 32) from both ends of this String, handling null by returning null.

The String is trimmed using String.trim(). Trim removes start and end characters <= 32. 

     StringUtils.trim(null)          = null
     StringUtils.trim("")            = ""
     StringUtils.trim("     ")       = ""
     StringUtils.trim("abc")         = "abc"
     StringUtils.trim("    abc    ") = "abc"

**Parameters:**
str - the String to be trimmed, may be null

**Returns:**
the trimmed string, null if null String input

---
###trimToNull
Removes control characters (char <= 32) from both ends of this String returning null if the String is empty ("") after the trim or if it is null.

     StringUtils.trimToNull(null)          = null
     StringUtils.trimToNull("")            = null
     StringUtils.trimToNull("     ")       = null
     StringUtils.trimToNull("abc")         = "abc"
     StringUtils.trimToNull("    abc    ") = "abc"

**Parameters:**
str - the String to be trimmed, may be null

**Returns:**
the trimmed String, null if only chars <= 32, empty or null String input

---
###trimToEmpty
Removes control characters (char <= 32) from both ends of this String returning an empty String ("") if the String is empty ("") after the trim or if it is null.

     StringUtils.trimToEmpty(null)          = ""
     StringUtils.trimToEmpty("")            = ""
     StringUtils.trimToEmpty("     ")       = ""
     StringUtils.trimToEmpty("abc")         = "abc"
     StringUtils.trimToEmpty("    abc    ") = "abc"
**Parameters:**
str - the String to be trimmed, may be null

**Returns:**
the trimmed String, or an empty String if null input

---
###replace
Replaces all occurrences of a String within another String.

     StringUtils.replace("aba", "a", null)  = "aba"
     StringUtils.replace("aba", "a", "")    = "b"
     StringUtils.replace("aba", "a", "z")   = "zbz"
     
     StringUtils.replace("abaa", "a", null, -1) = "abaa"
     StringUtils.replace("abaa", "a", "", -1)   = "b"
     StringUtils.replace("abaa", "a", "z", 0)   = "abaa"
     StringUtils.replace("abaa", "a", "z", 1)   = "zbaa"
     StringUtils.replace("abaa", "a", "z", 2)   = "zbza"

 
**Parameters:**
text - text to search and replace in, may be null
searchString - the String to search for, may be null
replacement - the String to replace it with, may be null

**Returns:**
the text with any replacements processed, null if null String input