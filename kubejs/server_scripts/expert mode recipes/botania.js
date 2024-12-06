ServerEvents.recipes(event => {
    event.remove({ id: 'botania:fertilizer_dye'})
    event.recipes.createMixing(
        'botania:fertilizer',
        [
            'mysticalagriculture:mystical_fertilizer',
            'mysticalagriculture:dye_essence'
        ]
    )
})