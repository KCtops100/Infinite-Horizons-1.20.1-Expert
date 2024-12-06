ServerEvents.recipes(event => {
    // tablet of zapping
    event.remove({ id: 'ars_elemental:tablet_ritual_tesla_coil'})
    event.recipes.botania.runic_altar(
        'ars_elemental:ritual_tesla_coil',
        [
            'irons_spellbooks:lightning_rune',
            'thermal:lightning_charge',
            'botania:lens_light',
            'ars_nouveau:air_essence',
            'mysticalagriculture:inferium_gemstone',
            'mysticalagriculture:inferium_gemstone'
        ],
        5000
    )
})