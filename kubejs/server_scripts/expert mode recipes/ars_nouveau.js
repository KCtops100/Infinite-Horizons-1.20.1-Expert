ServerEvents.recipes(event => {
    //source gem
    event.remove({ id: 'ars_nouveau:imbuement_lapis' })
    event.remove({ id: 'ars_nouveau:imbuement_amethyst' })
    event.recipes.ars_nouveau.imbuement('mysticalagriculture:prosperity_gemstone', 'ars_nouveau:source_gem', 500, [])
    // novice spell book
    event.remove({ id: 'ars_nouveau:novice_spell_book' })
    event.recipes.botania.runic_altar(
        'ars_nouveau:novice_spell_book',
        [
            'occultism:taboo_book',
            Item.of('mysticalagriculture:inferium_sword', '{Damage:0}'),
            Item.of('mysticalagriculture:inferium_pickaxe', '{Damage:0}'),
            Item.of('mysticalagriculture:inferium_shovel', '{Damage:0}'),
            Item.of('mysticalagriculture:inferium_axe', '{Damage:0}')
        ],
        5000
    )
    event.recipes.botania.runic_altar("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000)
})