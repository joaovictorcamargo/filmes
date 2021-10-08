
import React, { useState, useEffect } from 'react';
import { ScrolView } from 'react-native';

import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Title,
    BannerButton,
    Banner,
    SliderMovie
}
    from '.styles';
import { } from '@expo/vector-icons';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem'

import api, { key } from '../../services/api';

function Home() {

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] =

        useEffect(() => {
            let isActive = true;

            async function getMovies() {

                const [nowData, popularData, topData] = await Promise.all([
                    api.get('/movie/now_playing', {
                        params: {
                            api_key: key,
                            language: 'pt-BR',
                            page: 1,
                        }
                    }),
                    api.get('/movie/popular', {
                        params: {
                            api_key: key,
                            language: 'pt-BR',
                            page: 1,
                        }
                    }),
                    api.get('/movie/top-rated', {
                        params: {
                            api_key: key,
                            language: 'pt-BR',
                            page: 1,
                        }
                    }),


                ])

                console.log(popularData.data.results);

            }

            getMovies();

            return (
                <Container>

                    <Header title="React Prime" />

                    <SearchContainer>
                        <Input
                            placeholder="Ex Vingadores"
                            placeholderTextColor="#ddd"

                        />
                        <SearchButton>
                            <Feather name="search" size={30} color="#FFF" />


                        </SearchButton>

                    </SearchContainer>

                    <ScrolView showsVerticalScrollIndicator={false}>
                        <Title>Em cartaz</Title>
                        <BannerButton activeOpacity={0.9} onPress={() => alert(c)}>
                            <Banner
                                resizeMethod="resize"
                                source={{}}

                            />
                        </BannerButton>
                        <SliderMovie
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[1, 2, 3, 4]}
                            renderItem={({ item }) => <SliderItem />}

                        />

                        <Title>Populares</Title>

                        <SliderMovie
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[1, 2, 3, 4]}
                            renderItem={({ item }) => <SliderItem />}

                        />

                        <Title>Mais Votados</Title>

                        <SliderMovie
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[1, 2, 3, 4]}
                            renderItem={({ item }) => <SliderItem />}

                        />
                    </ScrolView>


                </Container >
            )
        }

export default Home;