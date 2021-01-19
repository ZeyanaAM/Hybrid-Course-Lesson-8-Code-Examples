import { StatusBar } from 'expo-status-bar';
import React, { Component, ReactChild, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type BasicProps = {
  body: string;
  isBold: boolean;
};

interface User {
  name: string;
  age?: number | null;
  email: string;
  memberType: 'free' | 'pro';
}

const BasicExample = ({ body }: { body: string; children?: ReactChild[] }) => {
  let text: string = 'This is a text';
  let counter: number = 1.0;
  let something: any = 'Hello';
  // let array = [];
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change text" onPress={() => (text = 1)} />
      <Text>Counter: {counter}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const BasicPropsExample = ({ body, isBold }: BasicProps) => {
  let text: string = 'This is a text';
  let counter: number = 1.0;
  let something: any = 'Hello';
  // let array = [];
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: isBold ? 'bold' : 'normal' }}>{text}</Text>
      <Button title="Change text" onPress={() => (text = 1)} />
      <Text>Counter: {counter}</Text>
      <Text>{body}</Text>
    </View>
  );
};

class BasicClassExample extends Component<{ body: string }> {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.body}</Text>
      </View>
    );
  }
}

const InterfaceExample = () => {
  let user: User = {
    name: 'Sam',
    age: null,
    email: 'hello@g.com',
    memberType: 'free',
  };

  // user.memberType = 'paid';
  return (
    <View style={styles.container}>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
      {/* <Button /> */}
    </View>
  );
};

// type CounterState = {
//   value:
// }

function add(a: number, b: number): void {
  return a + b;
}

const addArrow: (a: number, b: number) => void = (a, b) => {
  return 'hllo';
};

addArrow(4, 4);

const StateExample = () => {
  const [counter, setCounter] = useState<User | null>();
  let data: string[] = [];

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <Button
        title="Increment"
        onPress={() => {
          console.log('hello');
          setCounter(null);
        }}
      />
    </View>
  );
};

export default function App() {
  // return <BasicExample body="This is the body" />;
  // return <BasicClassExample body="This is the body" />;
  // return <BasicPropsExample body="This is the body" isBold={false} />;
  // return <InterfaceExample />;
  return <StateExample />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
