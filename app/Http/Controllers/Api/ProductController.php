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

        if($request->has("similar")){
            $product = Product::where("id", $request->get("similar"))->first();

            if ($product){

                $matchQuery = implode(" ", $product->tags);

                return Product::WhereRaw("MATCH(tags, name,brand, description) AGAINST('$matchQuery' IN BOOLEAN MODE)")
                    ->orWhere("brand", $product->brand)
                    ->where("id", "!=", $product->id)
                    ->get();

            }
        }

        if($request->has("search")){

            $search = $request->get("search");
            return Product::WhereRaw("MATCH(tags, name,brand, description) AGAINST('$search' IN BOOLEAN MODE)")->get();
        }

        return Product::all();
    }

    function productDetails($id, Request $request){

        return Product::where('id', $id)->first();
    }

}