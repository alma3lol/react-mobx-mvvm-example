# React w/ MobX using MVVM structure

This repo is a great example of implementing MVVM with ReactJS & MobX apps.

## The App

This app is a todo-alike app but more of a randomly priced items app.

### Structure

The MVVM structure consists of 4 components:

- Model
- View
- ViewModel
- ViewController (Binder)

### Model

Model is the data source, which means it could the API.  
If your model is the API, which is the case in this example, Model can be left behind. Instead, use ViewModel to supply data to view.

### View

The view is always the UI. What the user sees.

### ViewModel

*ViewModel is a state of the data in the model.* Ever heard that before? Sound complicated! Doesn't it?  
Well, lets break it down:  
ViewModel contains properties and functions; View uses the functions and Binds to properties from ViewModel.

All of that complexity is dealt with using MobX, so you don't have to worry about any of that process.

### ViewController (Binder)

This piece of the MVVM structure is what makes it work all together.  
Binder is used to bind functions' effects to the data source and refresh the view with the data that changed.  
In short words: Binder waits for actions; actions change the data; functions create actions; binder creates functions; view calls function;

#### Development

You can use this example for development. Just clone the repo change the name and version in `package.json` and you'll be ready to go.  
There will be more examples in the future using this repo.  
Also, improvements will be coming very often.

