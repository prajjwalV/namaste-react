
/*
*Header 
    - Logo
    - Nav items
*Body
    - Search
    - Restaurant container
        - restaurant card 
            - image
            - name , description
*Footer
* - Copyright
    - Links
    - contacts
    - address
*
*
*/

Exporting a document 

named export for one or more exports from same file --->

export const x = ..;
export const y = ..;

default export for file export --->\

use this for component export

export default Header;

Hooks in react -->
hooks are basically js functions
There are plenty of hooks in the react but we will mostly use two 
1. useState()
2. useEffect()

useState is a state management tool from react 

useState observes the changes in a component virtual DOM,
as soon as there is any change in the Virtual DOM the component is re rendered.
on call of the setList() function in useState the component is re rendered 

react is fast because of this fast re rendering of the virtual dom which uses 
REACT FIBER technique to re render the page 
