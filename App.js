import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import IndicatorViewPager from './src/component/ui/ViewPager/IndicatorViewPager';
import PagerDotIndicator from "./src/component/ui/ViewPager/PagerDotIndicator";

export default class App extends Component<{}> {


    _renderDotIndicator = () => {
        return <PagerDotIndicator pageCount={3}
                                  selectedDotStyle={{backgroundColor: 'red',height: 10, width: 10, borderRadius: 5}}
                                  dotStyle={{backgroundColor: 'green', height: 7, width: 7, borderRadius: 3.5}}/>;
    };

    render() {
        return (
            <View style={styles.container}>
                <IndicatorViewPager
                    style={{flex: 1}}
                    indicator={this._renderDotIndicator()}>
                    <View style={{backgroundColor: 'cadetblue', alignItems: 'center', justifyContent: 'center'}}>

                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor: 'cornflowerblue', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor: '#1AA094', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
                <Text style={{
                    position: 'absolute',
                    bottom: 8,
                    right: 16
                }}>SKIP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
