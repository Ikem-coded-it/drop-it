# drop-it

A package for making drop-down menus

## Installation

- In project root directory, run `npm install @ikem2023/drop-down-menus` to install package.

## Usage

- In your html, create a `div` element which will be the drop down container.
- Inside the container, add a `button` which will serve as a trigger for the drop down.
- Inside same container, add a `div` element which will containe the menu content.

- In your javascript file, run `import { Dropdown } from '@ikem2023/drop-down-menu';`
- create a new instance, e.g `let dropDown = new Dropdown()`
- pass the container created in your html file into the method `dropDown.create(container)`
