/** Declaration file generated by dts-gen */
declare module 'cognitive-services' {

    // ACADEMIC KNOWLEDGE
    export class academicKnowledge {
        constructor(_ref: any);
        calcHistogram(_ref2: any): any;
        calcHistogramPost(_ref3: any): any;
        evaluate(_ref4: any): any;
        evaluatePost(_ref5: any): any;
        getSimilarity(_ref9: any): any;
        graphSearch(_ref6: any): any;
        interpret(_ref7: any): any;
        interpretPost(_ref8: any): any;
        postSimilarity(_ref10: any): any;
    }

    // BING SUGGEST
    export class bingAutosuggest {
        constructor(_ref: any);
        suggestions(_ref2: any): any;
    }

    // BING IMAGE SEARCH
    export class bingImageSearch {
        constructor(_ref: any);
        imageInsights(_ref2: any): any;
        search(_ref3: any): any;
        trending(): any;
    }

    // BING NEWS SEARCH
    export class bingNewsSearch {
        constructor(_ref: any);
        categoryNews(_ref2: any): any;
        search(_ref3: any): any;
        trendingTopics(_ref4: any): any;
    }

    // BING SPELL CHECK
    export class bingSpellCheck {
        constructor(_ref: any);
        spellCheck(_ref2: any): any;
    }

    // BING VIDEO SEARCH
    export class bingVideoSearch {
        constructor(_ref: any);
        details(_ref3: any): any;
        search(_ref2: any): any;
        trending(): any;
    }

    //BING WEB SEARCH
    export class bingWebSearch {
        constructor(_ref: any);
        search(_ref2: any): any;
    }

    // VISION
    export class computerVision {
        constructor(options: ComputerVisionOptions);
        analyzeImage(options: AnalyzeImageOptions): Promise<AnalyzeImageReturn>;
        describeImage(options: describeImageOptions): Promise<DescribeImageReturn>;
        getHandwrittenTextOperationResult(options: GetHandwrittenTextOperationResultOptions): GetHandwrittenTextOperationResultReturn;
        getThumbnail(_ref4: any): any;
        listDomainSpecificModels(): any;
        ocr(_ref5: any): any;
        recognizeDomainSpecificContent(options: RecognizeDomainSpecificContentOptions): RecognizeDomainSpecificContentReturn;
        recognizeHandwrittenText(options: RecognizeHandwrittenTextOptions): Promise<string>;
        tagImage(_ref7: any): any;
    }

    export interface ComputerVisionOptions {
        apiKey: string,
        endpoint: string
    }

    export interface AnalyzeImageOptions {
        parameters?: { visualFeatures?: string, details?: string, language?: string },
        headers?: { "Content-Type"?: string },
        body?: { url?: string }
    }

    export interface AnalyzeImageParameters {
        visualFeatures?: string,
        details?: string,
        language?: Language
    }

    export interface RecognizeDomainSpecificContentOptions {
        parameters: { model: string },
        headers?: any,
        body?: any
    }

    export interface RecognizeDomainSpecificContentReturn {
        requestId: string,
        metadata: {
            width: number,
            height: number,
            format: string
        },
        result: any
    }

    export interface RecognizeHandwrittenTextOptions {
        parameters?: { handwriting?: boolean },
        headers?: { "Content-Type"?: string },
        body?: { url?: string }
    }

    export interface GetHandwrittenTextOperationResultOptions {
        parameters: { operationId: string }
    }

    export interface GetHandwrittenTextOperationResultReturn {
        status: string
    }

    export enum ClipartType {
        NonClipart,
        Ambiguous,
        NormalClipart,
        GoodClipart
    }

    export enum LineDrawingType {
        NonLineDrawing,
        LineDrawing
    }

    export interface rectangle {
        left: number,
        top: number,
        width: number,
        height: number
    }

    export enum Language {
        English = "en",
        SimplifiedChinese = "zh"
    }

    export interface ComputerVisionBaseReturn {
        description: {
            tags: string[],
            captions: { text: string, confidence: number }[]
            requestId: string,
            metadata: {
                width: number,
                height: number,
                format: string
            },
        }
    }

    export interface DescribeImageReturn extends ComputerVisionBaseReturn { }

    export interface AnalyzeImageReturn extends ComputerVisionBaseReturn {
        categories: {
            name: string,
            score: number,
            detail: any | { celebrities: { name: string, faceRectangle: rectangle, confidence: number }[] } | { landmarks: { name: string, confidence: number } }
        }[],
        adult: {
            isAdultContent: boolean,
            isRacyContent: boolean,
            adultScore: number,
            racyScore: number
        },
        tags: {
            name: string,
            confidence: number
        }[],
        faces: {
            age: number,
            gender: string,
            faceRectangle: any
        }[],
        color: {
            dominantColorForeground: string,
            dominantColorBackground: string,
            dominantColors: string[],
            accentColor: string,
            isBWImg: boolean
        },
        imageType: {
            clipArtType: ClipartType,
            lineDrawingType: LineDrawingType
        }
    }

    export interface describeImageOptions {
        parameters?: { maxCandidates?: string },
        headers?: { "Content-Type"?: string, "Ocp-Apim-Subscription-Key"?: string },
        body?: any
    }

    // EMOTION
    export class emotion {
        constructor(_ref: any);
        emotionRecognition(_ref2: any): any;
        emotionRecognitionInVideo(_ref3: any): any;
        emotionRecognitionWithFaceRectangles(_ref4: any): any;
        getRecognitionInVideoOperationResult(_ref5: any): any;
    }

    // ENTITY
    export class entityLinking {
        constructor(_ref: any);
        linkEntity(_ref2: any): any;
    }

    // FACE
    export class face {
        constructor(_ref: any);
        addAFaceToAFaceList(_ref7: any): any;
        addAPersonFace(_ref13: any): any;
        createAFaceList(_ref8: any): any;
        createAPerson(_ref14: any): any;
        createAPersonGroup(_ref22: any): any;
        deleteAFaceFromAFaceList(_ref9: any): any;
        deleteAFaceList(_ref10: any): any;
        deleteAPerson(_ref15: any): any;
        deleteAPersonFace(_ref16: any): any;
        deleteAPersonGroup(_ref23: any): any;
        detect(_ref2: any): any;
        findSimilar(_ref3: any): any;
        getAFaceList(_ref11: any): any;
        getAPerson(_ref17: any): any;
        getAPersonFace(_ref18: any): any;
        getAPersonGroup(_ref24: any): any;
        getPersonGroupTrainingStatus(_ref25: any): any;
        group(_ref4: any): any;
        identify(_ref5: any): any;
        listFaceLists(): any;
        listPersonGroups(_ref26: any): any;
        listPersonsInAPersonGroup(_ref19: any): any;
        trainPersonGroup(_ref27: any): any;
        updateAFaceList(_ref12: any): any;
        updateAPerson(_ref20: any): any;
        updateAPersonFace(_ref21: any): any;
        updateAPersonGroup(_ref28: any): any;
        verify(_ref6: any): any;
    }

    // QNA
    export class qnaMaker {
        constructor(_ref: any);
        createKnowledgeBase(_ref2: any): any;
        deleteKnowledgeBase(_ref3: any): any;
        downloadKnowledgeBase(_ref4: any): any;
        generateAnswer(_ref5: any): any;
        getAlterations(_ref6: any): any;
        publishKnowledgeBase(_ref7: any): any;
        trainKnowledgeBase(_ref8: any): any;
        updateAlterations(_ref9: any): any;
        updateKnowledgeBase(_ref10: any): any;
    }

    // RECOMMENDATIONS
    export class recommendations {
        constructor(_ref: any);
        cancelOperation(_ref2: any): any;
        createAModel(_ref4: any): any;
        createBusinessRule(_ref3: any): any;
        createOrTriggerABuild(_ref5: any): any;
        deleteABuild(_ref8: any): any;
        deleteAModel(_ref11: any): any;
        deleteAllBusinessRules(_ref6: any): any;
        deleteAllUsageFiles(_ref7: any): any;
        deleteBusinessRule(_ref9: any): any;
        deleteCatalogItems(_ref10: any): any;
        deleteUsageFile(_ref12: any): any;
        downloadUsageFile(_ref13: any): any;
        getAModelById(_ref23: any): any;
        getAllBatchJobs(_ref14: any): any;
        getAllBuilds(_ref15: any): any;
        getAllBusinessRules(_ref16: any): any;
        getAllCatalogItems(_ref17: any): any;
        getAllModels(): any;
        getBuildById(_ref18: any): any;
        getBuildDataStatistics(_ref19: any): any;
        getBuildMetrics(_ref20: any): any;
        getBusinessRule(_ref21: any): any;
        getItemToItemRecommendations(_ref22: any): any;
        getModelFeatures(_ref24: any): any;
        getOperationStatus(_ref25: any): any;
        getSpecificCatalogItemsBySearchTerm(_ref26: any): any;
        getUsageStatisticsForABuild(_ref27: any): any;
        getUsageStatisticsForAModel(_ref28: any): any;
        getUserToItemRecommendations(_ref29: any): any;
        listUsageFiles(_ref30: any): any;
        startBatchJob(_ref31: any): any;
        updateCatalogItems(_ref32: any): any;
        updateModel(_ref33: any): any;
        uploadACatalogFileToAModel(_ref34: any): any;
        uploadAUsageFileToAModel(_ref36: any): any;
        uploadUsageEvent(_ref35: any): any;
    }

    // SPEAKER
    export class speakerRecognition {
        constructor(_ref: any);
        identificationProfileCreateEnrollment(_ref2: any): any;
        identificationProfileCreateProfile(_ref3: any): any;
        identificationProfileDeleteProfile(_ref4: any): any;
        identificationProfileGet(_ref5: any): any;
        identificationProfileGetAll(): any;
        identificationProfileResetEnrollments(_ref6: any): any;
        listAllSupportedVerificationPhrases(_ref10: any): any;
        speakerRecognitionGetStatus(_ref7: any): any;
        speakerRecognitionIdentification(_ref8: any): any;
        speakerRecognitionVerification(_ref9: any): any;
        verificationProfileCreateEnrollment(_ref11: any): any;
        verificationProfileCreateProfile(_ref12: any): any;
        verificationProfileDeleteProfile(_ref13: any): any;
        verificationProfileGetAllProfiles(): any;
        verificationProfileGetProfile(_ref14: any): any;
        verificationProfileResetEnrollments(_ref15: any): any;
    }

    // TEXT ANALYTICS
    export class textAnalytics {
        constructor(_ref: any);
        detectLanguage(_ref2: any): any;
        keyPhrases(_ref3: any): any;
        sentiment(_ref4: any): any;
    }

    // TEXT TRANSLATOR
    export class textTranslator {
        constructor(_ref: any);
        addTranslation(_ref8: any): any;
        addTranslationArray(_ref9: any): any;
        breakSentences(_ref10: any): any;
        detect(_ref6: any): any;
        detectArray(_ref7: any): any;
        getLanguageNames(_ref4: any): any;
        getLanguagesForSpeak(): any;
        getLanguagesForTranslate(): any;
        getTranslations(_ref11: any): any;
        getTranslationsArray(_ref12: any): any;
        speak(_ref5: any): any;
        translate(_ref3: any): any;
        translateArray(_ref2: any): any;
    }

    // VIDEO
    export class video {
        constructor(_ref: any);
        faceDetectionAndTracking(_ref2: any): any;
        getOperationResult(_ref3: any): any;
        getResultVideo(_ref4: any): any;
        motionDetection(_ref5: any): any;
        stabilization(_ref6: any): any;
        thumbnail(_ref7: any): any;
    }

    // WEB LANGUAGE MODEL
    export class webLanguageModel {
        constructor(_ref: any);
        breakIntoWords(_ref2: any): any;
        calculateConditionalProbability(_ref3: any): any;
        calculateJointProbability(_ref4: any): any;
        generateNextWords(_ref5: any): any;
        listAvailableModels(): any;
    }

}