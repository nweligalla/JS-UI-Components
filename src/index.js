import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Tabs from './ui/tabs';


//create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();


//create dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropDown => {
    const instance = new Dropdown(dropDown)
    instance.init();
});

//create tab
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();