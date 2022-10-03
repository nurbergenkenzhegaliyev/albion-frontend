import React from 'react';
import Button from '../components/Button/Button.js'
import Dropdown from '../components/Dropdown/Dropdown.js';
import Modal from '../components/Modal/Modal.js';
import CraftTable from '../components/CraftTable/CraftTable.js';
import { useSelector } from 'react-redux';

const makers = [
    {
        url: "/img/hunter.png",
        name: "hunter"
    },
    {
        url: "/img/mage.png",
        name: "mage"
    },
    {
        url: "/img/toolmaker.png",
        name: "toolmaker"
    },
    {
        url: "/img/warrior.png",
        name: "warrior"
    },
];

const types = {
    warrior:[
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_SET1.png",
            name: "HEAD_PLATE"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_SET1.png",
            name: "ARMOR_PLATE"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_SET1.png",
            name: "SHOES_PLATE"
        },
        {
            url: "/img/warrior/SWORD/MAIN_SWORD.png",
            name: "SWORD"
        },
        {
            url: "/img/warrior/AXE/MAIN_AXE.png",
            name: "AXE"
        },
        {
            url: "/img/warrior/MACE/MAIN_MACE.png",
            name: "MACE"
        },
        {
            url: "/img/warrior/HAMMER/MAIN_HAMMER.png",
            name: "HAMMER"
        },
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_SET1.png",
            name: "KNUCKLES"
        },
        {
            url: "/img/warrior/CROSSBOW/MAIN_1HCROSSBOW.png",
            name: "CROSSBOW"
        },
        {
            url: "/img/warrior/SHIELD/OFF_SHIELD.png",
            name: "SHIELD"
        },
    ],
    hunter:[
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_SET1.png",
            name: "HEAD_LEATHER"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_SET1.png",
            name: "ARMOR_LEATHER"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_SET1.png",
            name: "SHOES_LEATHER"
        },
        {
            url: "/img/hunter/BOW/2H_BOW.png",
            name: "BOW"
        },
        {
            url: "/img/hunter/SPEAR/2H_SPEAR.png",
            name: "SPEAR"
        },
        {
            url: "/img/hunter/NATURESTAFF/MAIN_NATURESTAFF.png",
            name: "NATURESTAFF"
        },
        {
            url: "/img/hunter/DAGGER/MAIN_DAGGER.png",
            name: "DAGGER"
        },
        {
            url: "/img/hunter/QUARTERSTAFF/2H_QUARTERSTAFF.png",
            name: "QUARTERSTAFF"
        },
        {
            url: "/img/hunter/TORCH/OFF_TORCH.png",
            name: "TORCH"
        },
    ],
    mage:[
        {
            url: "/img/warrior/HEAD_CLOTH/HEAD_CLOTH_SET1.png",
            name: "HEAD_CLOTH"
        },
        {
            url: "/img/warrior/ARMOR_LEATHER/ARMOR_LEATHER_SET1.png",
            name: "ARMOR_LEATHER"
        },
        {
            url: "/img/warrior/SHOES_LEATHER/SHOES_LEATHER_SET1.png",
            name: "SHOES_LEATHER"
        },
        {
            url: "/img/warrior/BOW/2H_BOW.png",
            name: "BOW"
        },
        {
            url: "/img/warrior/SPEAR/2H_SPEAR.png",
            name: "SPEAR"
        },
        {
            url: "/img/warrior/NATURESTAFF/MAIN_NATURESTAFF.png",
            name: "NATURESTAFF"
        },
        {
            url: "/img/warrior/DAGGER/MAIN_DAGGER.png",
            name: "DAGGER"
        },
        {
            url: "/img/warrior/QUARTERSTAFF/2H_QUARTERSTAFF.png",
            name: "QUARTERSTAFF"
        },
        {
            url: "/img/warrior/TORCH/OFF_TORCH.png",
            name: "TORCH"
        },
    ],
};

const items = {
    HEAD_PLATE:[
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_SET1.png",
            name: "HEAD_PLATE_SET1"
        },
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_SET2.png",
            name: "HEAD_PLATE_SET2"
        },
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_SET3.png",
            name: "HEAD_PLATE_SET3"
        },
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_ROYAL.png",
            name: "HEAD_PLATE_ROYAL"
        },
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_UNDEAD.png",
            name: "HEAD_PLATE_UNDEAD"
        },
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_HELL.png",
            name: "HEAD_PLATE_HELL"
        },
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_KEEPER.png",
            name: "HEAD_PLATE_KEEPER"
        },
        {
            url: "/img/warrior/HEAD_PLATE/HEAD_PLATE_AVALON.png",
            name: "HEAD_PLATE_AVALON"
        },
    ],
    ARMOR_PLATE:[
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_SET1.png",
            name: "ARMOR_PLATE_SET1"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_SET2.png",
            name: "ARMOR_PLATE_SET2"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_SET3.png",
            name: "ARMOR_PLATE_SET3"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_ROYAL.png",
            name: "ARMOR_PLATE_ROYAL"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_UNDEAD.png",
            name: "ARMOR_PLATE_UNDEAD"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_HELL.png",
            name: "ARMOR_PLATE_HELL"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_KEEPER.png",
            name: "ARMOR_PLATE_KEEPER"
        },
        {
            url: "/img/warrior/ARMOR_PLATE/ARMOR_PLATE_AVALON.png",
            name: "ARMOR_PLATE_AVALON"
        },
    ],
    SHOES_PLATE:[
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_SET1.png",
            name: "SHOES_PLATE_SET1"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_SET2.png",
            name: "SHOES_PLATE_SET2"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_SET3.png",
            name: "SHOES_PLATE_SET3"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_ROYAL.png",
            name: "SHOES_PLATE_ROYAL"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_UNDEAD.png",
            name: "SHOES_PLATE_UNDEAD"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_HELL.png",
            name: "SHOES_PLATE_HELL"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_KEEPER.png",
            name: "SHOES_PLATE_KEEPER"
        },
        {
            url: "/img/warrior/SHOES_PLATE/SHOES_PLATE_AVALON.png",
            name: "SHOES_PLATE_AVALON"
        },
    ],
    SWORD: [
        {
            url: "/img/warrior/SWORD/MAIN_SWORD.png",
            name: "MAIN_SWORD"
        },
        {
            url: "/img/warrior/SWORD/2H_CLAYMORE.png",
            name: "2H_CLAYMORE"
        },
        {
            url: "/img/warrior/SWORD/2H_DUALSWORD.png",
            name: "2H_DUALSWORD"
        },
        {
            url: "/img/warrior/SWORD/MAIN_SCIMITAR_MORGANA.png",
            name: "MAIN_SCIMITAR_MORGANA"
        },
        {
            url: "/img/warrior/SWORD/2H_CLEAVER_HELL.png",
            name: "2H_CLEAVER_HELL"
        },
        {
            url: "/img/warrior/SWORD/2H_DUALSCIMITAR_UNDEAD.png",
            name: "2H_DUALSCIMITAR_UNDEAD"
        },
        {
            url: "/img/warrior/SWORD/2H_CLAYMORE_AVALON.png",
            name: "2H_CLAYMORE_AVALON"
        },
    ],
    AXE:[
        {
            url: "/img/warrior/AXE/MAIN_AXE.png",
            name: "MAIN_AXE"
        },
        {
            url: "/img/warrior/AXE/2H_AXE.png",
            name: "2H_AXE"
        },
        {
            url: "/img/warrior/AXE/2H_HALBERD.png",
            name: "2H_HALBERD"
        },
        {
            url: "/img/warrior/AXE/2H_HALBERD_MORGANA.png",
            name: "2H_HALBERD_MORGANA"
        },
        {
            url: "/img/warrior/AXE/2H_SCYTHE_HELL.png",
            name: "2H_SCYTHE_HELL"
        },
        {
            url: "/img/warrior/AXE/2H_DUALAXE_KEEPER.png",
            name: "2H_DUALAXE_KEEPER"
        },
        {
            url: "/img/warrior/AXE/2H_AXE_AVALON.png",
            name: "2H_AXE_AVALON"
        },
    ],
    MACE:[
        {
            url: "/img/warrior/MACE/MAIN_MACE.png",
            name: "MAIN_MACE"
        },
        {
            url: "/img/warrior/MACE/2H_MACE.png",
            name: "2H_MACE"
        },
        {
            url: "/img/warrior/MACE/2H_FLAIL.png",
            name: "2H_FLAIL"
        },
        {
            url: "/img/warrior/MACE/MAIN_ROCKMACE_KEEPER.png",
            name: "MAIN_ROCKMACE_KEEPER"
        },
        {
            url: "/img/warrior/MACE/MAIN_MACE_HELL.png",
            name: "MAIN_MACE_HELL"
        },
        {
            url: "/img/warrior/MACE/2H_MACE_MORGANA.png",
            name: "2H_MACE_MORGANA"
        },
        {
            url: "/img/warrior/MACE/2H_DUALMACE_AVALON.png",
            name: "2H_DUALMACE_AVALON"
        }
    ],
    HAMMER:[
        {
            url: "/img/warrior/HAMMER/MAIN_HAMMER.png",
            name: "MAIN_HAMMER"
        },
        {
            url: "/img/warrior/HAMMER/2H_POLEHAMMER.png",
            name: "2H_POLEHAMMER"
        },
        {
            url: "/img/warrior/HAMMER/2H_HAMMER.png",
            name: "2H_HAMMER"
        },
        {
            url: "/img/warrior/HAMMER/2H_HAMMER_UNDEAD.png",
            name: "2H_HAMMER_UNDEAD"
        },
        {
            url: "/img/warrior/HAMMER/2H_DUALHAMMER_HELL.png",
            name: "2H_DUALHAMMER_HELL"
        },
        {
            url: "/img/warrior/HAMMER/2H_RAM_KEEPER.png",
            name: "2H_RAM_KEEPER"
        },
        {
            url: "/img/warrior/HAMMER/2H_HAMMER_AVALON.png",
            name: "2H_HAMMER_AVALON"
        },
    ],
    KNUCKLES:[
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_SET1.png",
            name: "2H_KNUCKLES_SET1"
        },
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_SET2.png",
            name: "2H_KNUCKLES_SET2"
        },
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_SET3.png",
            name: "2H_KNUCKLES_SET3"
        },
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_KEEPER.png",
            name: "2H_KNUCKLES_KEEPER"
        },
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_HELL.png",
            name: "2H_KNUCKLES_HELL"
        },
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_MORGANA.png",
            name: "2H_KNUCKLES_MORGANA"
        },
        {
            url: "/img/warrior/KNUCKLES/2H_KNUCKLES_AVALON.png",
            name: "2H_KNUCKLES_AVALON"
        },
    ],
    CROSSBOW:[
        {
            url: "/img/warrior/CROSSBOW/2H_CROSSBOW.png",
            name: "2H_CROSSBOW"
        },
        {
            url: "/img/warrior/CROSSBOW/2H_CROSSBOWLARGE.png",
            name: "2H_CROSSBOWLARGE"
        },
        {
            url: "/img/warrior/CROSSBOW/MAIN_1HCROSSBOW.png",
            name: "MAIN_1HCROSSBOW"
        },
        {
            url: "/img/warrior/CROSSBOW/2H_REPEATINGCROSSBOW_UNDEAD.png",
            name: "2H_REPEATINGCROSSBOW_UNDEAD"
        },
        {
            url: "/img/warrior/CROSSBOW/2H_DUALCROSSBOW_HELL.png",
            name: "2H_DUALCROSSBOW_HELL"
        },
        {
            url: "/img/warrior/CROSSBOW/2H_CROSSBOWLARGE_MORGANA.png",
            name: "2H_CROSSBOWLARGE_MORGANA"
        },
        {
            url: "/img/warrior/CROSSBOW/2H_CROSSBOW_CANNON_AVALON.png",
            name: "2H_CROSSBOW_CANNON_AVALON"
        },
    ],
    SHIELD:[
        {
            url: "/img/warrior/SHIELD/OFF_SHIELD.png",
            name: "OFF_SHIELD"
        },
        {
            url: "/img/warrior/SHIELD/OFF_TOWERSHIELD_UNDEAD.png",
            name: "OFF_TOWERSHIELD_UNDEAD"
        },
        {
            url: "/img/warrior/SHIELD/OFF_SHIELD_HELL.png",
            name: "OFF_SHIELD_HELL"
        },
        {
            url: "/img/warrior/SHIELD/OFF_SPIKEDSHIELD_MORGANA.png",
            name: "OFF_SPIKEDSHIELD_MORGANA"
        },
        {
            url: "/img/warrior/SHIELD/OFF_SHIELD_AVALON.png",
            name: "OFF_SHIELD_AVALON"
        },
    ],
    HEAD_LEATHER:[
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_SET1.png",
            name: "HEAD_LEATHER_SET1"
        },
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_SET2.png",
            name: "HEAD_LEATHER_SET2"
        },
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_SET3.png",
            name: "HEAD_LEATHER_SET3"
        },
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_ROYAL.png",
            name: "HEAD_LEATHER_ROYAL"
        },
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_MORGANA.png",
            name: "HEAD_LEATHER_MORGANA"
        },
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_HELL.png",
            name: "HEAD_LEATHER_HELL"
        },
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_UNDEAD.png",
            name: "HEAD_LEATHER_UNDEAD"
        },
        {
            url: "/img/hunter/HEAD_LEATHER/HEAD_LEATHER_AVALON.png",
            name: "HEAD_LEATHER_AVALON"
        },
    ],
    ARMOR_LEATHER:[
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_SET1.png",
            name: "ARMOR_LEATHER_SET1"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_SET2.png",
            name: "ARMOR_LEATHER_SET2"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_SET3.png",
            name: "ARMOR_LEATHER_SET3"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_ROYAL.png",
            name: "ARMOR_LEATHER_ROYAL"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_MORGANA.png",
            name: "ARMOR_LEATHER_MORGANA"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_HELL.png",
            name: "ARMOR_LEATHER_HELL"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_UNDEAD.png",
            name: "ARMOR_LEATHER_UNDEAD"
        },
        {
            url: "/img/hunter/ARMOR_LEATHER/ARMOR_LEATHER_AVALON.png",
            name: "ARMOR_LEATHER_AVALON"
        },
    ],
    SHOES_LEATHER:[
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_SET1.png",
            name: "SHOES_LEATHER_SET1"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_SET2.png",
            name: "SHOES_LEATHER_SET2"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_SET3.png",
            name: "SHOES_LEATHER_SET3"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_ROYAL.png",
            name: "SHOES_LEATHER_ROYAL"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_MORGANA.png",
            name: "SHOES_LEATHER_MORGANA"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_HELL.png",
            name: "SHOES_LEATHER_HELL"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_UNDEAD.png",
            name: "SHOES_LEATHER_UNDEAD"
        },
        {
            url: "/img/hunter/SHOES_LEATHER/SHOES_LEATHER_AVALON.png",
            name: "SHOES_LEATHER_AVALON"
        },
    ],
    BOW:[
        {
            url: "/img/hunter/BOW/2H_BOW.png",
            name: "2H_BOW"
        },
        {
            url: "/img/hunter/BOW/2H_WARBOW.png",
            name: "2H_WARBOW"
        },
        {
            url: "/img/hunter/BOW/2H_LONGBOW.png",
            name: "2H_LONGBOW"
        },
        {
            url: "/img/hunter/BOW/2H_LONGBOW_UNDEAD.png",
            name: "2H_LONGBOW_UNDEAD"
        },
        {
            url: "/img/hunter/BOW/2H_BOW_HELL.png",
            name: "2H_BOW_HELL"
        },
        {
            url: "/img/hunter/BOW/2H_BOW_KEEPER.png",
            name: "2H_BOW_KEEPER"
        },
        {
            url: "/img/hunter/BOW/2H_BOW_AVALON.png",
            name: "2H_BOW_AVALON"
        },
    ],
    SPEAR:[
        {
            url: "/img/hunter/SPEAR/MAIN_SPEAR.png",
            name: "MAIN_SPEAR"
        },
        {
            url: "/img/hunter/SPEAR/2H_SPEAR.png",
            name: "2H_SPEAR"
        },
        {
            url: "/img/hunter/SPEAR/2H_GLAIVE.png",
            name: "2H_GLAIVE"
        },
        {
            url: "/img/hunter/SPEAR/MAIN_SPEAR_KEEPER.png",
            name: "MAIN_SPEAR_KEEPER"
        },
        {
            url: "/img/hunter/SPEAR/2H_HARPOON_HELL.png",
            name: "2H_HARPOON_HELL"
        },
        {
            url: "/img/hunter/SPEAR/2H_TRIDENT_UNDEAD.png",
            name: "2H_TRIDENT_UNDEAD"
        },
        {
            url: "/img/hunter/SPEAR/MAIN_SPEAR_LANCE_AVALON.png",
            name: "MAIN_SPEAR_LANCE_AVALON"
        },
    ],
    NATURESTAFF:[
        {
            url: "/img/hunter/NATURESTAFF/MAIN_NATURESTAFF.png",
            name: "MAIN_NATURESTAFF"
        },
        {
            url: "/img/hunter/NATURESTAFF/2H_NATURESTAFF.png",
            name: "2H_NATURESTAFF"
        },
        {
            url: "/img/hunter/NATURESTAFF/2H_WILDSTAFF.png",
            name: "2H_WILDSTAFF"
        },
        {
            url: "/img/hunter/NATURESTAFF/MAIN_NATURESTAFF_KEEPER.png",
            name: "MAIN_NATURESTAFF_KEEPER"
        },
        {
            url: "/img/hunter/NATURESTAFF/2H_NATURESTAFF_HELL.png",
            name: "2H_NATURESTAFF_HELL"
        },
        {
            url: "/img/hunter/NATURESTAFF/2H_NATURESTAFF_KEEPER.png",
            name: "2H_NATURESTAFF_KEEPER"
        },
        {
            url: "/img/hunter/NATURESTAFF/MAIN_NATURESTAFF_AVALON.png",
            name: "MAIN_NATURESTAFF_AVALON"
        },
    ],
    DAGGER:[
        {
            url: "/img/hunter/DAGGER/MAIN_DAGGER.png",
            name: "MAIN_DAGGER"
        },
        {
            url: "/img/hunter/DAGGER/2H_DAGGERPAIR.png",
            name: "2H_DAGGERPAIR"
        },
        {
            url: "/img/hunter/DAGGER/2H_CLAWPAIR.png",
            name: "2H_CLAWPAIR"
        },
        {
            url: "/img/hunter/DAGGER/MAIN_RAPIER_MORGANA.png",
            name: "MAIN_RAPIER_MORGANA"
        },
        {
            url: "/img/hunter/DAGGER/MAIN_DAGGER_HELL.png",
            name: "MAIN_DAGGER_HELL"
        },
        {
            url: "/img/hunter/DAGGER/2H_DUALSICKLE_UNDEAD.png",
            name: "2H_DUALSICKLE_UNDEAD"
        },
        {
            url: "/img/hunter/DAGGER/2H_DAGGER_KATAR_AVALON.png",
            name: "2H_DAGGER_KATAR_AVALON"
        },
    ],
    QUARTERSTAFF:[
        {
            url: "/img/hunter/QUARTERSTAFF/2H_QUARTERSTAFF.png",
            name: "2H_QUARTERSTAFF"
        },
        {
            url: "/img/hunter/QUARTERSTAFF/2H_IRONCLADEDSTAFF.png",
            name: "2H_IRONCLADEDSTAFF"
        },
        {
            url: "/img/hunter/QUARTERSTAFF/2H_DOUBLEBLADEDSTAFF.png",
            name: "2H_DOUBLEBLADEDSTAFF"
        },
        {
            url: "/img/hunter/QUARTERSTAFF/2H_COMBATSTAFF_MORGANA.png",
            name: "2H_COMBATSTAFF_MORGANA"
        },
        {
            url: "/img/hunter/QUARTERSTAFF/2H_TWINSCYTHE_HELL.png",
            name: "2H_TWINSCYTHE_HELL"
        },
        {
            url: "/img/hunter/QUARTERSTAFF/2H_ROCKSTAFF_KEEPER.png",
            name: "2H_ROCKSTAFF_KEEPER"
        },
        {
            url: "/img/hunter/QUARTERSTAFF/2H_QUARTERSTAFF_AVALON.png",
            name: "2H_QUARTERSTAFF_AVALON"
        },
    ],
    TORCH:[
        {
            url: "/img/hunter/TORCH/OFF_TORCH.png",
            name: "OFF_TORCH"
        },
        {
            url: "/img/hunter/TORCH/OFF_HORN_KEEPER.png",
            name: "OFF_HORN_KEEPER"
        },
        {
            url: "/img/hunter/TORCH/OFF_JESTERCANE_HELL.png",
            name: "OFF_JESTERCANE_HELL"
        },
        {
            url: "/img/hunter/TORCH/OFF_LAMP_UNDEAD.png",
            name: "OFF_LAMP_UNDEAD"
        },
        {
            url: "/img/hunter/TORCH/OFF_TALISMAN_AVALON.png",
            name: "OFF_TALISMAN_AVALON"
        },
    ],
    
};


function Craft() {
    const [modalActive, setModalActive] = React.useState(false)
    const { craftingItems } = useSelector((state)=> state.info);
    return(
        <div className='craft'>
            <div className='itemChoose'>
                <div className='chooseButtons'>
                    <Dropdown imgLinkArray={makers} type="maker" />
                    <Dropdown imgLinkObj={types} type="item" />
                    <Dropdown imgLinkObj={items} type="name" />
                </div>

                <div className='tierButtons'>
                    <div className='d-flex'>
                        <Button tier="4" />
                        <Button tier="5" />
                        <Button tier="6" />
                        <Button tier="7" />
                        <Button tier="8" />
                    </div>
                    <Button id="create"/>
                </div>
                    {/* <Button id="delete" craftingItems={craftingItems} /> */}
                <Button openModal={setModalActive} id="update"/>
                <Modal active={modalActive} setActive={setModalActive} />
            </div>
            {
                craftingItems.map((obj, index) => (
                    <CraftTable key={obj["@uniquename"]} item={obj} />
                ))
            }
        </div>
    )
}

export default Craft;