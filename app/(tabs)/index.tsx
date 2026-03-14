import { useRouter } from "expo-router";
import { Image, ScrollView, View, Text, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../../components/SearchBar";
import { icons } from "../../constants/icons";
import { images } from "../../constants/images";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import  MovieCard  from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();
  const {data: movies, 
    loading: moviesLoading, 
    error: moviesError} = useFetch(() => fetchMovies({ query: '' }), true);
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', paddingBottom: 10}}>
        <Image source={icons.logo} className=" w-12 h-10 mt-20 mb-10 mx-auto"/>
        {moviesLoading ? (
          <ActivityIndicator size="large" color="#ab8bff" className="mt-10 self-center"/>
        ): moviesError ? (
          <Text className="text-red-500 text-center mt-10">Failed to load movies. Please try again.</Text>
        ): (
        
        <View className="flex-1 mt-5">
          <SearchBar
            value=""
            onChangeText={() => {}}
            onPress={()=>router.push('/search')}
            placeholder="Search for movies, TV shows, etc."
          />
          <>
            <Text className="text-light-200 text-2xl font-bold mt-5 mb-3">Trending Movies</Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => (
                <MovieCard
                 {...item}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'flex-start',
                gap: 20, marginBottom: 10 ,paddingRight: 5
               }}
               className="mt-2 pb-32"
               scrollEnabled={false}
            />
          </>
        </View>
        )}
      </ScrollView>
    </View>
  );
}
