import React, { useState } from 'react'
import { Avatar, Card, Text, useTheme } from 'react-native-paper'
import { View } from 'react-native'

type Props = {
    category:{
        list:{id: string, value: string, icon: string}[],
        selectedList: {},
        error: string,
    }
    chooseCategory(item: any): void
}

const CategoryList = (props: Props) => {

    const { colors, texting } = useTheme()

    const categoryColor = (item: {}): string => {
        if (item === props.category.selectedList) {
            return colors.secondColor
        } else {
            return colors.thirdTextColor
        }
    }

    return (
        <View style={{ margin: 8 }} >
            <Text
                style={{ color: colors.secondTextColor, margin: 8, }}
            >Categorias de gastos: </Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent: 'space-around',
                }}
            >
                {props.category.list.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            elevation={5}
                            style={{
                                margin: 4,
                                marginBottom: 10,
                                padding: 3,
                                backgroundColor: categoryColor(item)
                            }}
                            onPress={() => props.chooseCategory(item)}
                        >
                            <Avatar.Icon
                                {...props} icon={item.icon}
                                color={colors.mainColor}
                                style={{
                                    alignSelf: 'center',
                                    backgroundColor: categoryColor(item)
                                }}
                            />
                            <Text
                                style={{
                                    color: colors.secondTextColor, padding: 2,
                                    textAlign: 'center'
                                }}
                            >
                                {item.value}
                            </Text>
                        </Card>
                    )
                })}
            </View>
        </View>
    )
}

export default CategoryList