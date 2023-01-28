import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import React from 'react'


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView
            {...props}
        >
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent