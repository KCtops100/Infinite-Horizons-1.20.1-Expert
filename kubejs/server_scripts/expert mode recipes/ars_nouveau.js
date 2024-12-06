ServerEvents.recipes(event => {
    // novice spell book
    event.remove({ id: 'ars_nouveau:novice_spell_book' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            Item.of('mysticalagriculture:inferium_sword', '{Damage:0}'),
            Item.of('mysticalagriculture:inferium_pickaxe', '{Damage:0}'),
            Item.of('mysticalagriculture:inferium_shovel', '{Damage:0}'),
            Item.of('mysticalagriculture:inferium_axe', '{Damage:0}')
        ],
	    'occultism:taboo_book',
	    'ars_nouveau:novice_spell_book',
	    1000,
	    true
	);
    // mage's spell book
    event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'forbidden_arcanus:obsidian_ingot',
            'mysticalagriculture:prudentium_gemstone',
            'mysticalagriculture:prudentium_gemstone',
            'mysticalagriculture:prudentium_gemstone',
            'botania:quartz_blaze',
            'botania:quartz_blaze',
            'naturesaura:fortress_finder',
            'naturesaura:fortress_finder'
        ],
	    'ars_nouveau:novice_spell_book',
	    'ars_nouveau:apprentice_spell_book',
	    2000,
	    true
	);
    // archmage spell book
    event.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'forbidden_arcanus:dark_nether_star',
            'ars_nouveau:wilden_tribute',
            'minecraft:emerald',
            'minecraft:emerald',
            'thermal:enderium_ingot',
            'thermal:enderium_ingot',
            'thermal:enderium_ingot',
            'minecraft:totem_of_undying'
        ],
	    'ars_nouveau:apprentice_spell_book',
	    'ars_nouveau:archmage_spell_book',
	    4000,
	    true
	);
    // source gem
    event.remove({ id: 'ars_nouveau:imbuement_lapis' })
    event.remove({ id: 'ars_nouveau:imbuement_amethyst' })
    event.recipes.ars_nouveau.imbuement('mysticalagriculture:prosperity_gemstone', 'ars_nouveau:source_gem', 500, [])
    // magebloom fiber
    event.remove({ id: 'ars_nouveau:magebloom_fiber' })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: 'ars_nouveau:magebloom' }],
        tool: { tag: 'forge:tools/knives' },
        result: [{ item: 'ars_nouveau:magebloom_fiber', count: 4 }]
    })
})