import { Link } from "expo-router";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { icons } from "@/constants/icons";

 const MovieCard= ({id,poster_path,title,vote_average,release_date}:Movie) =>{
  return (
    <Link href={`/movies/${id}`} asChild >
        <TouchableOpacity className="w-[30%]">
            <Image 
                source={{
                    uri:poster_path
                    ?`https://image.tmdb.org/t/p/w500${poster_path}`
                    :'https://via.placeholder.co/600x400/1a1a1a/ffffff.png'
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
            />
            <Text className="text-white text-sm font-semibold mt-2" numberOfLines={1}>{title}</Text>
            <View className="flex-row items-center mt-1">
                <Image source={icons.star} className="size-4"/>
                <Text className="text-white text-xs ml-1">{vote_average.toFixed(1)}</Text>
            </View>
            <Text className="text-white text-xs mt-1">{release_date}</Text>
            </TouchableOpacity>
    </Link>
  );
}
export default MovieCard;