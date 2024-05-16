<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('health_flag_medication', function (Blueprint $table) {
            $table->id();
            $table->foreignId('health_flag_id')->constrained()->cascadeOnDelete();
            $table->foreignId('surgery_type_id')->constrained()->cascadeOnDelete();

            $table->text('description')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('health_flag_medication');
    }
};
