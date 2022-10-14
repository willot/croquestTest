// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js"
    ];

    Constants.DefaultCards = [
        // {
        //     card: {
        //         name:"world model",
        //         layers: ["walk"],
        //         type: "3d",
        //         singleSided: true,
        //         shadow: true,
        //         translation:[0, -1.7, 0],
        //         placeholder: true,
        //         placeholderSize: [400, 0.1, 400],
        //         placeholderColor: 0x53D9D8,
        //         placeholderOffset: [0, 0, 0],
        //     }
        // },
        {
            card: {
                name: "world model",
                type: "3d",
                dataLocation: "./assets/images/artgallery_042122.glb.zip",
                dataScale: [1,1,1],
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation: [0, -1.7, 0],

                placeholder: true,
                placeholderSize: [100, 0.01, 100],
                placeholderColor: 0xcccccc,
                placeholderOffset: [0, -1.7, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
            }
        },
        {
            card: {
                name: "image card",
                behaviorModules: ["physics","menu"],
                translation: [0, 0.4, -16],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/test1.png",
                frameColor: 0x53D9D8,
                color: 0x53D9D8,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "text editor",
                className: "TextFieldActor",
                translation: [5.5, 0.4, -16.87],
                rotation: [0, 0, 0],
                depth: 0.05,
                type: "text",
                runs: [{text: "\nKneel before metaverse god!\n"}],
                margins: {left: 20, top: 20, right: 20, bottom: 20},
                backgroundColor: 0xff0000,
                color: 0x000000,
                // color: 0xf4e056,
                // frameColor: frameColor,
                width: 2,
                height: 2,
                textScale: 0.002,
                shadow: true,
            }
        },

        {
            card: {
                name: "auggie award",
                translation: [7.79, -0.45, -16.87],
                // rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                dataLocation: "35hI1OQ1NaqWki0Or-uHXAVM9vipZGVZIc_emQwLfCAcXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaT2BBQmV6T3NAemYEflxSeG9cAAYMTXNxcg0FBxpcWhtWR1pEQFBBG1hcVkdaQ1BHRlAbQ1RbUEZGVBpebAd3ZwBkYVEEZVICWAB7YkdiYm9xc09BXHNRcE1qf3hEdlZEfFFzRGAFGlFUQVQabV1-bFdNZAdnBAxCfnAYXk9kamVaAUVbBnt3QUBaWwUEfnhPb1RWfhhqDQ",
                dataScale: [1, 1, 1],
                fileName: "/Auggie2.glb",
                modelType: "glb",
                license: "CC-BY",
                attribution: "'Auggie Awards Trophy AWE 2022' by Kai Oldman derived from 'Auggie Awards Trophy AWE 2021' (https://skfb.ly/otrIP) by oriinbar is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name: "image card",
                translation: [12, 0.6, 10.77],
                rotation: [0, -Math.PI / 2, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/bg.pano.jpg",
                cardURL: "https://croquet.io",
                cardHilite: 0xffffaa,
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
    ];
}
