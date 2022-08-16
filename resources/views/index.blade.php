@extends('welcome')

@section('content')
    <div id="app">
        <example-component/>
    </div>

@endsection

@section('js')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection
