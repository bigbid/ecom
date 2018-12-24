<?php
/**
 * Created by PhpStorm.
 * User: dev
 * Date: 24/12/18
 * Time: 10:08 AM
 */

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    function fetchProducts(Request $request){

        return Product::all();
    }

    function productDetails($id, Request $request){

        return Product::where('id', $id)->first();
    }

}