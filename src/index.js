import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';


//create tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();


//create dropdown

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropDown => {
    const instance = new Dropdown(dropDown)
    instance.init();
});