import React from 'react';


import {
    Container,
    BnnerItem,
    Title,
    RateContainer,
    Rate
} from './styles';



import { Ionicons } from '@expo/vector-icons';

function SliderItem() {

    return (
        <Container activeOpacity={0.7}>
            <BannerItem
                source={{ uri: '' }}
            />
            <Title numberOfLines={1}>
                Vingadores
            </Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74e" />
                <Rate>9/10</Rate>

            </RateContainer>
        </Container>
    )
}

export default SliderItem;