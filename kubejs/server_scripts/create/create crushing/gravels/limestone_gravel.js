// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    // ['create:limestone', 'kubejs:limestone_gravel']
    event.recipes.createCrushing(['kubejs:limestone_gravel'], 'create:limestone')
});