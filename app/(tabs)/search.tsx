import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar";
import { images } from "../../constants/images";
import { fetchMovies } from "../../services/api";
import useFetch from "../../services/useFetch";

const Search = () => {
   const [searchQuery, setSearchQuery] = useState('');
  const {data: movies, 
    loading: moviesLoading, 
    error: moviesError,
refetch: loadMovies,
reset
} = useFetch(() => fetchMovies({ query: searchQuery }), false);
    

    useEffect(() => {
        const delayDebounce = setTimeout(async () => {
            if (searchQuery.trim()) {
                await loadMovies();
            } else {
                reset();
            }
        }, 500); // Adjust the debounce delay as needed
        return () => clearTimeout(delayDebounce);
    }, [searchQuery, loadMovies, reset]);

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full h-full z-0" resizeMode="cover"/>
        <FlatList 
        data={movies ?? []}
        renderItem={({ item }) => (
          <MovieCard
           {...item} />
           )
           }
           keyExtractor={(item) => item.id.toString()}
           className="mt-5 px-5"
           numColumns={3}
              columnWrapperStyle={{ justifyContent: 'center',
                gap: 20, marginBottom: 10 ,paddingRight: 5
               }}
               contentContainerStyle={{paddingBottom: 20}}
               ListHeaderComponent={
                
                <>
                <View className="my-5">
                    <SearchBar 
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                    />
            
                </View>

               {moviesLoading && (
                <ActivityIndicator size="large" color="#ab8bff" 
                className="mt-10 self-center"/>
               )}
               {moviesError && (
                <Text className="text-red-500 text-center mt-10">Error fetching movies. Please try again.</Text>
               )}
               {!moviesLoading && !moviesError && searchQuery.trim()&& movies?.length>0 && (
                <Text className="text-white text-2xl font-bold mb-3">Search Results for:
                <Text className="text-accent">{searchQuery}</Text>
                </Text>
               )}
        </>
        }
        ListEmptyComponent={
            !moviesLoading && !moviesError ?(
                <View className="mt-10 px-5">
                    <Text className="text-white text-center">{searchQuery.trim() ? 'No movies found.' : 'Start typing to search for movies.'}</Text>
                    
                </View>
            ) : null
        }
        />
        </View>
        
    )
}
export default Search;
