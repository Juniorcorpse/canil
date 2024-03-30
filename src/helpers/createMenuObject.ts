type MenuOptinons = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptinons) => {
    let returnObj = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    };
    if(activeMenu !== ''){
        returnObj[activeMenu] = true;
    }

    return returnObj;
}
