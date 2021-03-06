<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 19 Jul 2019 16:20:24 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Teacher
 * 
 * @property int $teacherid
 * @property string $fullname
 * @property string $description
 * @property int $creatorid
 * 
 * @property \App\Models\User $user
 * @property \Illuminate\Database\Eloquent\Collection $absences
 *
 * @package App\Models
 */
class Teacher extends Model
{
	protected $table = 'teacher';
	protected $primaryKey = 'teacherid';
	public $timestamps = false;

	protected $casts = [
		'creatorid' => 'int'
	];

	protected $fillable = [
		'fullname',
		'description',
		'creatorid'
	];

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'creatorid');
	}

	public function absences()
	{
		return $this->hasMany(\App\Models\Absence::class, 'teacherid');
	}
}
