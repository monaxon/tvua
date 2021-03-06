<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 19 Jul 2019 16:20:24 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class College
 * 
 * @property int $collegeid
 * @property string $title
 * @property string $description
 * @property int $creatorid
 * 
 * @property \App\Models\User $user
 * @property \Illuminate\Database\Eloquent\Collection $absences
 *
 * @package App\Models
 */
class College extends Model
{
	protected $table = 'college';
	protected $primaryKey = 'collegeid';
	public $timestamps = false;

	protected $casts = [
		'creatorid' => 'int'
	];

	protected $fillable = [
		'title',
		'description',
		'creatorid'
	];

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'creatorid');
	}

	public function absences()
	{
		return $this->hasMany(\App\Models\Absence::class, 'collegeid');
	}
}
