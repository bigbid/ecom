<?php
/**
 * Created by PhpStorm.
 * User: dev
 * Date: 24/12/18
 * Time: 10:09 AM
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $casts = ["images" => "json", "tags" => "json"];
}