<?php

namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		$data = [
			'title' => 'Tide Gauge Downloader',
			'css' => '/css/home.css',
		];
		return view('home', $data);
	}
}
