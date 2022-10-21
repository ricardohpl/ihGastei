import React from 'react'
import { Card, Paragraph, useTheme } from 'react-native-paper'

type Props = {
    title: string
    subtitle: string
    description: string
    icon?: ((props: { size: number; }) => React.ReactNode)
}

const TopCard = (props: Props) => {
    const { topCard, topTitle, topDescription } = useTheme()

    return (
        <Card
            elevation={5}
            style={topCard}
        >
            <Card.Title 
                title={props.title} subtitle={props.subtitle} left={props.icon}
                titleStyle={topTitle}
                subtitleStyle={topTitle}
             />
            <Card.Content>
                <Paragraph style={topDescription}>
                    {props.description}
                </Paragraph>
            </Card.Content>
        </Card>
    )
}

export default TopCard