import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import styles from "./styles";

export default function App() {
    const [hasPermission, setHasPermission ] = useState<any>(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [captureImage, setCapturedImage] = useState<any>(null);
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync ();
            setHasPermission(status === "granted");
        })();
    },[]);
    const __closeCamera = () => {
        setStartOver(true);
    };
    const __takePicture = async () => {
        if(!camera) return;
        const photo = await camera.takePictureAsync();
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    };

    const __savePhoto = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
            try {
                const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);
                MediaLibrary.createAlbumAsync("Images", asset, false)
                    .then(() =>{
                        Alert.alert("Imagem salva com sucesso!");
                    })
                    .catch(() => {
                        Alert.alert("Erro ao salvar a imagem!");
                    });
            } catch (error) {
                Alert.alert(String(error));
            }
        } else {
            Alert.alert("Sem permissão para acessar os arquivos");
        }
    };
    return (
        <View style={styles.container}>
            {startOver ? (
            <View style={styles.startOver}>
                <TouchableOpacity
                onPress={() => setStartOver(false)}
                style={styles.buttonStartOver}>
                <Text style={styles.textStartOver}>Tirar uma foto </Text>
            </TouchableOpacity>
        </View>
            ) : (
    })
}